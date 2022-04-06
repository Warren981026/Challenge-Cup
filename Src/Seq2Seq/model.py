import torch
import torch.nn as nn
import random

# Encoder
class Encoder(nn.Module):
    def __init__(self, input_dim, hid_dim, n_layers, dropout):

        super().__init__()

        self.input_dim = input_dim
        self.hid_dim = hid_dim
        self.n_layers = n_layers

        self.rnn = nn.LSTM(input_dim, hid_dim, num_layers = n_layers, dropout=dropout) # 参数中的dropout会在除最后一层外的所有层结束后加dropo
        self.dropout = nn.Dropout(dropout)


    def forward(self, src):

        # src = [seq_len, batch_size, input_size]

        outputs, (hidden, cell) = self.rnn(src) #h0 c0不提供默认为0

        # outputs: [src sent len, batch size, hid dim * n directions]
        # hidden, cell: [n layers* n directions, batch size, hid dim]
        # outputs are always from the top hidden layer

        # The RNN returns:
        # outputs (the top-layer hidden state for each time-step)
        # hidden (the final hidden state for each layer, stacked on top of
        # each other)
        # and cell (the final cell state for each layer, stacked on top of
        # each other)

        return hidden, cell

class Decoder(nn.Module):
    def __init__(self, output_dim, hid_dim, n_layers, dropout):
        super().__init__()

        self.hid_dim = hid_dim
        self.output_dim = output_dim
        self.n_layers = n_layers
        self.dropout = dropout

        self.rnn = nn.LSTM(output_dim, hid_dim, n_layers, dropout=dropout)

        self.out = nn.Linear(hid_dim, output_dim)

        self.dropout = nn.Dropout(dropout)


    def forward(self, input, hidden, cell):
        # hidden = [n layers * n directions, batch size, hid dim]
        # cell = [n layers * n directions, batch size, hid dim]

        # n directions in the decoder will both always be 1, therefore:
        # hidden = [n layers, batch size, hid dim]
        # context = [n layers, batch size, hid dim]

        # input = [1, batch size, output dim]

        output, (hidden, cell) = self.rnn(input, (hidden, cell))

        # output = [sent len, batch size, hid dim * n directions]
        # hidden = [n layers * n directions, batch size, hid dim]
        # cell = [n layers * n directions, batch size, hid dim]

        # !! sent len and n directions will always be 1 in the decoder,therefore:

        # output = [1, batch size, hid dim]
        # hidden = [n layers, batch size, hid dim]
        # cell = [n layers, batch size, hid dim]

        prediction = self.out(output.squeeze(0))

        # prediction = [batch size, output dim]

        return prediction, hidden, cell

class Seq2Seq(nn.Module):
    def __init__(self, encoder, decoder, device):
        super().__init__()

        self.encoder = encoder
        self.decoder = decoder
        self.device = device

    def forward(self, src, trg, teacher_forcing_ratio=0.5):
        # src =  [src_seq_len, batch_size, input_size]
        # trg =  [trg_seq_len, batch_size, output_size]
        # teacher_forcing_ratio is probability to use teacher forcing
        # e.g. if teacher_forcing_ratio is 0.75 we use ground-truth inputs 75% of the time

        batch_size = trg.shape[1]
        max_len = trg.shape[0]
        output_size = self.decoder.output_dim

        # tensor to store decoder outputs
        outputs = torch.zeros(max_len, batch_size, output_size).to(self.device)

        # last hidden state of the encoder is used as the initial hidden state of the decoder

        hidden, cell = self.encoder.forward(src)

        # first input
        input = torch.zeros([1, batch_size, output_size]).to(self.device)

        for t in range(0, max_len):
            # insert input token embedding, previous hidden and previous cell states

            # receive output tensor (predictions) and new hidden and cell states

            output, hidden, cell = self.decoder.forward(input, hidden, cell)

            # place predictions in a tensor holding predictions for each token

            outputs[t] = output

            # decide if we are going to use teacher forcing or not
            teacher_force = random.random() < teacher_forcing_ratio

            # if teacher forcing, use actual next token as next input
            # if not, use predicted token
            # 在 模型训练速度 和 训练测试差别不要太大 作一个均衡
            input = trg[t].unsqueeze(0) if teacher_force else output.unsqueeze(0)

        return outputs