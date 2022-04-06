import pandas as pd
import torch
import numpy as np
import torch.nn as nn
import torch.optim as optim
from model import Encoder,Decoder,Seq2Seq,Attention

class Model(object):
    def __init__(self, data):
        self.data = data
        self.model_path = 'seq2seq-model.pt'
        self.src_seq_len = 29
        self.trg_seq_len = 28
        self.batch_size = 128
        self.input_size = 26
        self.output_size = 6
        self.enc_hid_dim = 256
        self.dec_hid_dim = 256
        self.enc_dropout = 0.7
        self.dec_dropout = 0.7

    def batch_process(self):
        data_iterator = []
        info_columns_array = ["病历号", "治疗时间"]
        extra_columns_array = ["性别__0.0", "性别__1.0", "留存牙数", "第一次就诊年龄", "治疗时间", "工号__学生", "工号__老师", "规律复查__0",
                               "规律复查__1"]
        tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                       17, 16, 15, 14, 13, 12, 11]
        none_value = -5
        none_array = []
        for i in range(self.batch_size):
            tmp = []
            for j in range(self.input_size - len(extra_columns_array)):
                tmp.append(none_value)
            none_array.append(tmp)
        none_df = pd.DataFrame(none_array)

        for i in range(len(self.data) // self.batch_size):
            tmp_data = self.data.iloc[i * self.batch_size:(i + 1) * self.batch_size, ]
            src = torch.rand([self.src_seq_len, self.batch_size, self.input_size])
            trg = torch.rand([self.trg_seq_len, self.batch_size, self.output_size])
            source_PD = torch.rand([self.trg_seq_len, self.batch_size, self.output_size])

            for j in range(len(tooth_array)):
                input_columns_array = ["@Flag", "@FI@B", "@FI@L", "@动度", "@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L",
                                       "@PD@ML",
                                       "@PD@DB@Flag", "@PD@B@Flag", "@PD@MB@Flag", "@PD@DL@Flag", "@PD@L@Flag",
                                       "@PD@ML@Flag",
                                       "@溢脓@DB", "@溢脓@B", "@溢脓@MB", "@溢脓@DL", "@溢脓@L", "@溢脓@ML", "@BI@颊侧", "@BI@舌侧",
                                       "@AL附着丧失@颊侧", "@AL附着丧失@舌侧"]
                output_columns_array = ["@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L", "@PD@ML"]
                source_PD_columns_array = ["@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L", "@PD@ML"]

                for k in range(len(input_columns_array)):
                    input_columns_array[k] = "@" + str(tooth_array[j]) + input_columns_array[k]
                for k in range(len(output_columns_array)):
                    output_columns_array[k] = "@new@" + str(tooth_array[j]) + output_columns_array[k]
                for k in range(len(source_PD_columns_array)):
                    source_PD_columns_array[k] = "@" + str(tooth_array[j]) + source_PD_columns_array[k]

                src[j] = torch.tensor(np.array(pd.DataFrame(tmp_data[input_columns_array].values, dtype=np.float)))#.cuda()

                source_PD[j] = torch.tensor(np.array(pd.DataFrame(tmp_data[source_PD_columns_array].values, dtype=np.float)))#.cuda()

            # src中还要添加个人信息
            none_df.index = tmp_data[extra_columns_array].index
            info_data = pd.concat([tmp_data[extra_columns_array], none_df], axis=1)
            src[len(tooth_array)] = torch.tensor(np.array(pd.DataFrame(info_data.values, dtype=np.float)))#.cuda()

            iterator_dict = {"Src": src, "Trg": trg, "Info": tmp_data[info_columns_array], "Source_PD": source_PD}
            data_iterator.append(iterator_dict)

        return data_iterator

    def retune(self, data):
        tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                       17, 16, 15, 14, 13, 12, 11]
        pos_array = ["DB", "B", "MB", "DL", "L", "ML"]
        for index in data.index:
            for tooth in tooth_array:
                if data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[0]] == 0 and data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[1]] == 0 and data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[2]] == 0 and data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[3]] == 0 and data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[4]] == 0 and data.loc[index, "@" + str(tooth) + "@PD@" + pos_array[5]] == 0:
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[0]] = 0
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[1]] = 0
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[2]] = 0
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[3]] = 0
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[4]] = 0
                    data.loc[index, "@new@" + str(tooth) + "@PD@" + pos_array[5]] = 0

        return data

    def predict(self):

        attn = Attention(self.enc_hid_dim, self.dec_hid_dim)
        enc = Encoder(self.input_size, self.enc_hid_dim, self.dec_hid_dim, self.enc_dropout)
        dec = Decoder(self.output_size, self.enc_hid_dim, self.dec_hid_dim, self.dec_dropout, attn)
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        model = Seq2Seq(enc, dec, device).to(device)

        model.load_state_dict(torch.load('seq2seq-model.pt',map_location=torch.device('cuda' if torch.cuda.is_available() else 'cpu')))
        model.eval()

        prediction = pd.DataFrame()

        tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                       17, 16, 15, 14, 13, 12, 11]
        pos_array = ["DB", "B", "MB", "DL", "L", "ML"]

        iterator = self.batch_process()
        with torch.no_grad():
            for i in range(len(iterator)):
                src = iterator[i]["Src"]#.cuda()
                trg = iterator[i]["Trg"]#.cuda()
                info = iterator[i]["Info"]
                source_PD = iterator[i]["Source_PD"]#.cuda()

                output = model.forward(src, trg, 0)

                for j in range(trg.shape[0]):
                    predict_columns = []
                    init_columns = []
                    for pos in pos_array:
                        predict_columns.append("@new@" + str(tooth_array[j]) + "@PD@" + pos)
                        init_columns.append("@" + str(tooth_array[j]) + "@PD@" + pos)

                    predict_data = pd.DataFrame(np.around(np.array(output[j].cpu())), columns=predict_columns)
                    init_PD_data = pd.DataFrame(np.array(source_PD[j].cpu()), columns=init_columns)
                    info.index = predict_data.index
                    info = pd.concat([info, predict_data], axis=1)
                    info = pd.concat([info, init_PD_data], axis=1)

                prediction = pd.concat([prediction, info], axis=0)
        prediction.index=range(prediction.shape[0])
        prediction = self.retune(prediction)
        
        return prediction
