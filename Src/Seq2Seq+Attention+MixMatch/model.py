import torch
import torch.nn as nn
import random

# Encoder
class Encoder(nn.Module):
    def __init__(self, input_dim, enc_hid_dim, dec_hid_dim, dropout):
        super(Encoder, self).__init__()
        self.input_dim = input_dim
        self.enc_hid_dim = enc_hid_dim
        self.dec_hid_dim = dec_hid_dim
        self.dropout = dropout

        self.rnn = nn.GRU(input_dim, enc_hid_dim, bidirectional=True)
        self.fc = nn.Linear(enc_hid_dim * 2, dec_hid_dim)
        self.dropout = nn.Dropout(dropout)

    def forward(self, src):
        # embedded = [src sent len, batch size, emb dim]
        outputs, hidden = self.rnn(src)
        # outputs = [src sent len, batch size, hid dim * num directions]
        # hidden = [n layers * num directions, batch size, hid dim]

        # hidden is stacked [forward_1, backward_1, forward_2, backward_2, ...]
        # outputs are always from the last layer

        # hidden [-2, :, : ] is the last of the forwards RNN
        # hidden [-1, :, : ] is the last of the backwards RNN
        # [-2,:,:]在最后的时间步之后（即在看到最后一个单词之后）给出顶层前向RNN隐藏状态在句子。和[-1，:，:]在最后的时间步之后（即在看到句子中的第一个单词之后）给出顶层后向RNN隐藏状态
        hidden = torch.tanh(self.fc(torch.cat((hidden[-2, :, :], hidden[-1, :, :]), dim=1)))
        # outputs = [src sent len, batch size, enc hid dim * 2]
        # hidden = [batch size, dec hid dim]
        return outputs, hidden


class Attention(nn.Module):
    def __init__(self, enc_hid_dim, dec_hid_dim):
        super(Attention, self).__init__()
        self.enc_hid_dim = enc_hid_dim
        self.dec_hid_dim = dec_hid_dim
        self.attn = nn.Linear((enc_hid_dim * 2) + dec_hid_dim, dec_hid_dim)
        self.v = nn.Parameter(torch.rand(dec_hid_dim))

    def forward(self, hidden, encoder_outputs):
        # hidden = [batch size, dec hid dim]
        # encoder_outputs = [src sent len, batch size, enc hid dim * 2]
        batch_size = encoder_outputs.shape[1]
        src_len = encoder_outputs.shape[0]
        # 重复操作，让隐藏状态的第二个维度和encoder相同
        hidden = hidden.unsqueeze(1).repeat(1, src_len, 1)
        # 该函数按指定的向量来重新排列一个数组，在这里是调整encoder输出的维度顺序，在后面能够进行比较
        encoder_outputs = encoder_outputs.permute(1, 0, 2)
        # hidden = [batch size, src sent len, dec hid dim]
        # encoder_outputs = [batch size, src sent len, enc hid dim * 2]
        # 开始计算hidden和encoder_outputs之间的匹配值
        energy = torch.tanh(self.attn(torch.cat((hidden, encoder_outputs), dim=2)))
        # energy = [batch size, src sent len, dec hid dim]
        # 调整energy的排序
        energy = energy.permute(0, 2, 1)
        # energy = [batch size, dec hid dim, src sent len]

        # v = [dec hid dim]
        v = self.v.repeat(batch_size, 1).unsqueeze(1)
        # v = [batch_size, 1, dec hid dim] 注意这个bmm的作用，对存储在两个批batch1和batch2内的矩阵进行批矩阵乘操
        attention = torch.bmm(v, energy).squeeze(1)
        # attention=[batch_size, src_len]
        return nn.functional.softmax(attention, dim=1)


class Decoder(nn.Module):
    def __init__(self, output_dim, enc_hid_dim, dec_hid_dim, dropout, attention):
        super(Decoder, self).__init__()
        self.enc_hid_dim = enc_hid_dim
        self.dec_hid_dim = dec_hid_dim
        self.output_dim = output_dim
        self.dropout = dropout
        self.attention = attention

        self.rnn = nn.GRU((enc_hid_dim * 2) + output_dim, dec_hid_dim)
        self.out = nn.Linear((enc_hid_dim * 2) + dec_hid_dim + output_dim, output_dim)
        self.dropout = nn.Dropout(dropout)

    def forward(self, input, hidden, encoder_outputs):
        # hidden = [batch size, dec hid dim]
        # encoder_outputs = [src sent len, batch size, enc hid dim * 2]
        # input = [1, batch size, output dim]

        a = self.attention(hidden, encoder_outputs)
        # a = [batch size, src len]
        a = a.unsqueeze(1)
        # a = [batch size, 1, src len]
        encoder_outputs = encoder_outputs.permute(1, 0, 2)
        # encoder_outputs = [batch size, src sent len, enc hid dim * 2]

        # 在获取了权重和encoder隐藏状态之后，开始完成第一个公式，创建加权向量wt，使用bmm进行乘
        weighted = torch.bmm(a, encoder_outputs)
        # weighted = [batch size, 1, enc hid dim * 2]
        weighted = weighted.permute(1, 0, 2)

        rnn_input = torch.cat((input, weighted), dim=2)
        # rnn_input = [1, batch size, (enc hid dim * 2) + output dim]

        output, hidden = self.rnn(rnn_input, hidden.unsqueeze(0))

        assert (output == hidden).all()

        embedded = input.squeeze(0)
        output = output.squeeze(0)
        weighted = weighted.squeeze(0)

        output = self.out(torch.cat((output, weighted, embedded), dim=1))

        # output = [batch size, output dim]

        return output, hidden.squeeze(0)


class Seq2Seq(nn.Module):
    def __init__(self, encoder, decoder, device):
        super(Seq2Seq, self).__init__()
        self.encoder = encoder
        self.decoder = decoder
        self.device = device

    def forward(self, src, trg, teacher_forcing_ratio=0.5):
        # src =  [src_seq_len, batch_size, input_size]
        # trg =  [trg_seq_len, batch_size, output_size]

        batch_size = src.shape[1]
        max_len = trg.shape[0]
        output_size = self.decoder.output_dim

        outputs = torch.zeros(max_len, batch_size, output_size).to(self.device)

        encoder_outputs, hidden = self.encoder(src)

        input = torch.zeros([1, batch_size, output_size]).to(self.device)
        for t in range(0, max_len):
            output, hidden = self.decoder(input, hidden, encoder_outputs)
            outputs[t] = output
            teacher_force = random.random() < teacher_forcing_ratio
            input = trg[t].unsqueeze(0) if teacher_force else output.unsqueeze(0)

        return outputs