import pandas as pd
import csv
import torch
import numpy as np

def train_valid_test_split(data,valid_ratio,test_ratio):
    test_data = data.sample(frac=test_ratio)
    train_valid_data = pd.concat([data, test_data], axis=0)
    train_valid_data.drop_duplicates(keep=False, inplace=True)
    valid_data = train_valid_data.sample(frac=valid_ratio)
    train_data = pd.concat([train_valid_data,valid_data], axis = 0)
    train_data.drop_duplicates(keep=False, inplace=True)

    return train_data, valid_data, test_data

def batch_process(data, src_seq_len, trg_seq_len, batch_size, input_size, output_size):
    data_iterator = []
    info_columns_array = ["病历号", "治疗时间"]
    extra_columns_array = ["性别__0.0", "性别__1.0", "留存牙数", "第一次就诊年龄", "治疗时间", "工号__学生", "工号__老师","规律复查__0","规律复查__1"]
    tooth_array = [47, 46, 37, 36, 27, 26, 17, 16]
    none_value = -5
    none_array = []
    for i in range(batch_size):
        tmp = []
        for j in range(input_size - len(extra_columns_array)):
            tmp.append(none_value)
        none_array.append(tmp)
    none_df = pd.DataFrame(none_array)

    for i in range(len(data) // batch_size):
        tmp_data = data.iloc[i*batch_size:(i+1)*batch_size,]
        src = torch.rand([src_seq_len,batch_size,input_size])
        trg = torch.rand([trg_seq_len,batch_size,output_size])
        source_PD = torch.rand([trg_seq_len,batch_size,output_size])

        for j in range(len(tooth_array)):
            input_columns_array = ["@Flag", "@FI@B", "@FI@L", "@动度", "@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L",
                                   "@PD@ML",
                                   "@溢脓@DB", "@溢脓@B", "@溢脓@MB", "@溢脓@DL", "@溢脓@L", "@溢脓@ML", "@BI@颊侧", "@BI@舌侧",
                                   "@AL附着丧失@颊侧", "@AL附着丧失@舌侧"]
            output_columns_array = ["@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L", "@PD@ML"]
            source_PD_columns_array = ["@PD@DB", "@PD@B", "@PD@MB", "@PD@DL", "@PD@L", "@PD@ML"]

            for k in range(len(input_columns_array)):
                input_columns_array[k] = "@" + str(tooth_array[j]) + input_columns_array[k]

            src[j] = torch.tensor(np.array(pd.DataFrame(tmp_data[input_columns_array].values, dtype=np.float))).cuda()

            for k in range(len(output_columns_array)):
                output_columns_array[k] = "@new@" + str(tooth_array[j]) + output_columns_array[k]
                source_PD_columns_array[k] = "@" + str(tooth_array[j]) + source_PD_columns_array[k]

            trg[j] = torch.tensor(np.array(pd.DataFrame(tmp_data[output_columns_array].values, dtype=np.float))).cuda()
            source_PD[j] = torch.tensor(np.array(pd.DataFrame(tmp_data[source_PD_columns_array].values, dtype=np.float))).cuda()

        #src中还要添加个人信息
        none_df.index = tmp_data[extra_columns_array].index
        info_data = pd.concat([tmp_data[extra_columns_array], none_df], axis=1)
        src[len(tooth_array)] = torch.tensor(np.array(pd.DataFrame(info_data.values, dtype=np.float))).cuda()

        iterator_dict = {"Src":src,"Trg":trg,"Info":tmp_data[info_columns_array],"Source_PD":source_PD}
        data_iterator.append(iterator_dict)

    return data_iterator



