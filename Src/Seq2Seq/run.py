import torch
import torch.nn as nn
import torch.optim as optim
import random
import math
import time
import pandas as pd
import numpy as np

from model import Encoder,Decoder,Seq2Seq
from data import train_valid_test_split, batch_process

def train(model, iterator, optimizer, criterion, clip, teacher_forcing_ratio, out_flag):

    model.train()

    epoch_loss = 0
    prediction = pd.DataFrame()

    tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                   17, 16, 15, 14, 13, 12, 11]
    pos_array = ["DB", "B", "MB", "DL", "L", "ML"]

    for i in range(len(iterator)):
        src = iterator[i]["Src"].cuda()
        trg = iterator[i]["Trg"].cuda()
        info = iterator[i]["Info"]

        optimizer.zero_grad()

        output = model.forward(src, trg, teacher_forcing_ratio)

        # trg =  [trg_seq_len, batch_size, output_size]
        # output = [trg_seq_len, batch_size, output_size]

        if out_flag:
            for j in range(trg.shape[0]):
                actual_columns = []
                predict_columns = []
                for pos in pos_array:
                    actual_columns.append("@" + str(tooth_array[j]) + "@PD@" + pos)
                    predict_columns.append("@predict@" + str(tooth_array[j]) + "@PD@" + pos)

                actual_data = pd.DataFrame(np.array(trg[j].cpu()), columns=actual_columns)
                predict_data = pd.DataFrame(np.around(np.array(output[j].cpu().detach())), columns=predict_columns)
                info.index = actual_data.index
                info = pd.concat([info, actual_data], axis=1)
                info = pd.concat([info, predict_data], axis=1)

            prediction = pd.concat([prediction, info], axis=0)

        loss = torch.sqrt(criterion(output, trg)) # RMSE

        loss.backward()

        # solve the overfit problem
        torch.nn.utils.clip_grad_norm_(model.parameters(), clip)

        optimizer.step()

        epoch_loss += loss.item()

    if out_flag:
        prediction.to_csv("./result/train.csv",encoding="utf-8-sig")

    return epoch_loss / len(iterator)


def evaluate(model, iterator, criterion, out_flag, output_file_path):
    model.eval()

    epoch_loss = 0
    prediction = pd.DataFrame()

    tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                   17, 16, 15, 14, 13, 12, 11]
    pos_array = ["DB", "B", "MB", "DL", "L", "ML"]

    with torch.no_grad():
        for i in range(len(iterator)):
            src = iterator[i]["Src"].cuda()
            trg = iterator[i]["Trg"].cuda()
            info = iterator[i]["Info"]
            source_PD = iterator[i]["Source_PD"].cuda()

            output = model.forward(src, trg, 0)

            if out_flag:
                for j in range(trg.shape[0]):
                    actual_columns = []
                    predict_columns = []
                    init_columns = []
                    for pos in pos_array:
                        actual_columns.append("@" + str(tooth_array[j]) + "@PD@" + pos)
                        predict_columns.append("@predict@" + str(tooth_array[j]) + "@PD@" + pos)
                        init_columns.append("@init@" + str(tooth_array[j]) + "@PD@" + pos)

                    actual_data = pd.DataFrame(np.array(trg[j].cpu()),columns=actual_columns)
                    predict_data = pd.DataFrame(np.around(np.array(output[j].cpu())),columns=predict_columns)
                    init_PD_data = pd.DataFrame(np.array(source_PD[j].cpu()),columns=init_columns)
                    info.index = actual_data.index
                    info = pd.concat([info,actual_data],axis=1)
                    info = pd.concat([info,predict_data],axis=1)
                    info = pd.concat([info, init_PD_data], axis=1)

                prediction = pd.concat([prediction,info],axis=0)

            loss = torch.sqrt(criterion(output, trg)) #RMSE

            epoch_loss += loss.item()

    if out_flag:
        prediction.to_csv(output_file_path,encoding="utf-8-sig")

    return epoch_loss / len(iterator)

# init weights
def init_weights(m):
    for name, param in m.named_parameters():
        nn.init.uniform_(param.data, 0, 0.01)

# calculate the number of trainable parameters in the model
def count_parameters(model):
    return sum(p.numel() for p in model.parameters() if p.requires_grad)

# calculate time
def epoch_time(start_time, end_time):
    elapsed_time = end_time - start_time
    elapsed_mins = int(elapsed_time / 60)
    elapsed_secs = int(elapsed_time - (elapsed_mins * 60))
    return elapsed_mins, elapsed_secs

def retune(input_file_path):
    data = pd.DataFrame(pd.read_csv(input_file_path))
    tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                   17, 16, 15, 14, 13, 12, 11]
    pos_array = ["DB", "B", "MB", "DL", "L", "ML"]
    for index,row in data.iterrows():
        for tooth in tooth_array:
            if data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[0]] == 0 and data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[1]] == 0 and data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[2]] == 0 and data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[3]] == 0 and data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[4]] == 0 and data.loc[index,"@init@"+str(tooth)+"@PD@"+pos_array[5]] == 0:
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[0]] = 0
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[1]] = 0
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[2]] = 0
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[3]] = 0
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[4]] = 0
                data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos_array[5]] = 0

    data.to_csv(input_file_path,encoding="utf-8-sig")

def calculate_accuracy(input_file_path):
    data = pd.DataFrame(pd.read_csv(input_file_path))
    tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                   17, 16, 15, 14, 13, 12, 11]
    pos_array = ["DB", "B", "MB", "DL", "L", "ML"]
    accurate_num = 0
    total_num = 0
    for index,row in data.iterrows():
        for tooth in tooth_array:
            for pos in pos_array:
                if abs(data.loc[index,"@"+str(tooth)+"@PD@"+pos] - data.loc[index, "@predict@" + str(tooth) + "@PD@" + pos]) <= 1:
                    accurate_num+=1
            total_num+=6

    print(f'\t Accuracy: {accurate_num / total_num:.3f}')

    return accurate_num / total_num


if __name__ == '__main__':

    INPUT_DIM = 20 #每颗牙对应的输入特征数，待定
    OUTPUT_DIM = 6 #每颗牙输出6个PD值，构成一个输出牙向量
    HID_DIM = 256
    N_LAYERS = 1
    ENC_DROPOUT = 0.2
    DEC_DROPOUT = 0.2
    N_EPOCHS = 20
    CLIP = 1
    valid_ratio = 0.1
    test_ratio = 0.1
    src_seq_len = 29
    trg_seq_len = 28
    batch_size = 64
    teacher_forcing_ratio = 0.3
    learning_rate = 0.001
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')  # use gpu if we have

    train_accuracy_array = []
    valid_accuracy_array = []
    train_loss_array = []
    valid_loss_array = []

    data = pd.DataFrame(pd.read_csv("result.csv"))
    train_data, valid_data, test_data = train_valid_test_split(data,valid_ratio,test_ratio)
    train_iterator = batch_process(train_data,src_seq_len,trg_seq_len,batch_size,INPUT_DIM,OUTPUT_DIM)
    valid_iterator = batch_process(valid_data, src_seq_len, trg_seq_len, batch_size, INPUT_DIM, OUTPUT_DIM)
    test_iterator = batch_process(test_data, src_seq_len, trg_seq_len, batch_size, INPUT_DIM, OUTPUT_DIM)

    enc = Encoder(INPUT_DIM, HID_DIM, N_LAYERS, ENC_DROPOUT)
    dec = Decoder(OUTPUT_DIM, HID_DIM, N_LAYERS, DEC_DROPOUT)
    model = Seq2Seq(enc, dec, device).to(device)
    # model.apply(init_weights)

    # optimizer
    optimizer = optim.Adam(model.parameters(), lr=learning_rate)

    # criterion
    criterion = nn.MSELoss()

    best_valid_loss = float('inf')

    for epoch in range(N_EPOCHS):
        start_time = time.time()

        train_loss = train(model, train_iterator, optimizer, criterion, CLIP, teacher_forcing_ratio, False)
        valid_loss = evaluate(model, valid_iterator, criterion, False, "./result/valid.csv")

        end_time = time.time()

        epoch_mins, epoch_secs = epoch_time(start_time, end_time)

        if valid_loss < best_valid_loss:
            best_valid_loss = valid_loss
            torch.save(model.state_dict(), 'seq2seq-model.pt')

        print(f'Epoch: {epoch + 1:02} | Time: {epoch_mins}m {epoch_secs}s')
        print(f'\t Train Loss: {train_loss:.3f}')
        print(f'\t Val Loss: {valid_loss:.3f}')
        train_loss_array.append(train_loss)
        valid_loss_array.append(valid_loss)

        """
        print("Train Accuracy:")
        retune("./result/train.csv")
        train_accuracy = calculate_accuracy("./result/train.csv")
        train_accuracy_array.append(train_accuracy)

        print("Valid Accuracy:")
        retune("./result/valid.csv")
        valid_accuracy = calculate_accuracy("./result/valid.csv")
        valid_accuracy_array.append(valid_accuracy)
        """

    model.load_state_dict(torch.load('seq2seq-model.pt'))
    test_loss = evaluate(model, test_iterator, criterion, True, "./result/prediction.csv")
    print(f'| Test Loss: {test_loss:.3f}')

    print("Test Accuracy:")
    retune("./result/prediction.csv")
    _ = calculate_accuracy("./result/prediction.csv")
    
    """
    evaluation = pd.DataFrame({"Train_Accuracy":train_accuracy_array,"Valid_Accuracy":valid_accuracy_array,
                               "Train_Loss":train_loss_array,"Valid_Loss":valid_loss_array})
    evaluation.to_csv("./result/evaluation.csv",encoding="utf-8-sig")
    """
