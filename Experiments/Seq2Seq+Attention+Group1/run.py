import torch
import torch.nn as nn
import torch.optim as optim
import random
import math
import time
import pandas as pd
import numpy as np
import datetime

from model import Encoder,Decoder,Seq2Seq,Attention
from data import train_valid_test_split, batch_process

class EarlyStopping:
    """Early stops the training if validation loss doesn't improve after a given patience."""
    def __init__(self, patience=7, verbose=False, delta=0):
        """
        Args:
            patience (int): How long to wait after last time validation loss improved.
                            Default: 7
            verbose (bool): If True, prints a message for each validation loss improvement.
                            Default: False
            delta (float): Minimum change in the monitored quantity to qualify as an improvement.
                            Default: 0
        """
        self.patience = patience
        self.verbose = verbose
        self.counter = 0
        self.best_score = None
        self.early_stop = False
        self.val_loss_min = np.Inf
        self.delta = delta

    def __call__(self, val_loss, model):

        score = -val_loss

        if self.best_score is None:
            self.best_score = score
            self.save_checkpoint(val_loss, model)
        elif score < self.best_score + self.delta:
            self.counter += 1
            print(f'EarlyStopping counter: {self.counter} out of {self.patience}')
            if self.counter >= self.patience:
                self.early_stop = True
        else:
            self.best_score = score
            self.save_checkpoint(val_loss, model)
            self.counter = 0

    def save_checkpoint(self, val_loss, model):
        '''Saves model when validation loss decrease.'''
        if self.verbose:
            print(f'Validation loss decreased ({self.val_loss_min:.6f} --> {val_loss:.6f}).  Saving model ...')
        torch.save(model.state_dict(), 'seq2seq-model.pt')
        self.val_loss_min = val_loss

def train(model, iterator, optimizer, criterion, clip, teacher_forcing_ratio, out_flag):

    model.train()

    epoch_loss = 0
    prediction = pd.DataFrame()

    tooth_array = [47, 46, 37, 36, 27, 26, 17, 16]
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

    tooth_array = [47, 46, 37, 36, 27, 26, 17, 16]
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
        if 'weight' in name:
            nn.init.normal_(param.data, mean=0, std=0.01)
        else:
            nn.init.constant_(param.data, 0)

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
    tooth_array = [47, 46, 37, 36, 27, 26, 17, 16]
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
    tooth_array = [47, 46, 37, 36, 27, 26, 17, 16]
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

    INPUT_DIM = 20  # 每颗牙对应的输入特征数，待定
    OUTPUT_DIM = 6 #每颗牙输出6个PD值，构成一个输出牙向量
    ENC_HID_DIM = 256
    DEC_HID_DIM = 256
    ENC_DROPOUT = 0.5
    DEC_DROPOUT = 0.5
    N_EPOCHS = 300
    CLIP = 1
    valid_ratio = 0.1
    test_ratio = 0.1
    src_seq_len = 9
    trg_seq_len = 8
    batch_size = 128
    teacher_forcing_ratio = 0.3
    learning_rate = 0.001
    weight_decay = 0.01
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')  # use gpu if we have

    train_accuracy_array = []
    valid_accuracy_array = []
    train_loss_array = []
    valid_loss_array = []
    test_accuracy_array = []
    epoch_array = []

    data = pd.DataFrame(pd.read_csv("result_new.csv"))
    train_data, valid_data, test_data = train_valid_test_split(data,valid_ratio,test_ratio)
    train_iterator = batch_process(train_data,src_seq_len,trg_seq_len,batch_size,INPUT_DIM,OUTPUT_DIM)
    valid_iterator = batch_process(valid_data, src_seq_len, trg_seq_len, batch_size, INPUT_DIM, OUTPUT_DIM)
    test_iterator = batch_process(test_data, src_seq_len, trg_seq_len, batch_size, INPUT_DIM, OUTPUT_DIM)

    attn = Attention(ENC_HID_DIM, DEC_HID_DIM)
    enc = Encoder(INPUT_DIM, ENC_HID_DIM, DEC_HID_DIM, ENC_DROPOUT)
    dec = Decoder(OUTPUT_DIM, ENC_HID_DIM, DEC_HID_DIM, DEC_DROPOUT, attn)
    model = Seq2Seq(enc, dec, device).to(device)

    tmp_attn = Attention(ENC_HID_DIM, DEC_HID_DIM)
    tmp_enc = Encoder(INPUT_DIM, ENC_HID_DIM, DEC_HID_DIM, ENC_DROPOUT)
    tmp_dec = Decoder(OUTPUT_DIM, ENC_HID_DIM, DEC_HID_DIM, DEC_DROPOUT, tmp_attn)
    tmp_model = Seq2Seq(tmp_enc, tmp_dec, device).to(device)
    # model.apply(init_weights)

    # optimizer
    optimizer = optim.AdamW(model.parameters(), lr=learning_rate, weight_decay=weight_decay)
    # scheduler = optim.lr_scheduler.MultiStepLR(optimizer=optimizer,milestones=[i for i in range(150,N_EPOCHS,50)],gamma=0.5)

    # early_stoping
    early_stopping = EarlyStopping(patience=30,verbose=True)

    # criterion
    criterion = nn.MSELoss()

    best_valid_loss = float('inf')

    current_time = datetime.datetime.now()
    current_time = "{}{}{}{}{}".format(current_time.year, current_time.month, current_time.day, current_time.hour,
                                       current_time.minute)

    for epoch in range(N_EPOCHS):
        start_time = time.time()

        train_loss = train(model, train_iterator, optimizer, criterion, CLIP, teacher_forcing_ratio, False)
        valid_loss = evaluate(model, valid_iterator, criterion, False, "./result/valid.csv")

        #scheduler.step()
        #print('\t Learning Rate:',scheduler.get_last_lr())

        end_time = time.time()

        epoch_mins, epoch_secs = epoch_time(start_time, end_time)

        early_stopping(valid_loss, model)
        if early_stopping.early_stop:
            print("Early stopping")
            # 结束模型训练
            break

        # if valid_loss < best_valid_loss:
        #     best_valid_loss = valid_loss
        #     torch.save(model.state_dict(), 'seq2seq-model.pt')

        print(f'Epoch: {epoch + 1:02} | Time: {epoch_mins}m {epoch_secs}s')
        print(f'\t Train Loss: {train_loss:.3f}')
        print(f'\t Val Loss: {valid_loss:.3f}')
        train_loss_array.append(train_loss)
        valid_loss_array.append(valid_loss)

        if epoch % 50 == 0:
            tmp_model.load_state_dict(torch.load('seq2seq-model.pt'))
            test_loss = evaluate(tmp_model, test_iterator, criterion, True, "./result/tmp_prediction.csv")
            print(f'| Test Loss: {test_loss:.3f}')

            print("Test Accuracy:")
            retune("./result/tmp_prediction.csv")
            tmp_accuracy = calculate_accuracy("./result/tmp_prediction.csv")
            test_accuracy_array.append(tmp_accuracy)
            epoch_array.append(epoch)

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
    test_loss = evaluate(model, test_iterator, criterion, True, "./result/prediction_"+current_time+".csv")
    print(f'| Test Loss: {test_loss:.3f}')

    print("Test Accuracy:")
    retune("./result/prediction_"+current_time+".csv")
    test_accuracy = calculate_accuracy("./result/prediction_"+current_time+".csv")
    test_accuracy_array.append(test_accuracy)
    epoch_array.append(N_EPOCHS)

    loss_result = pd.DataFrame({"Train Loss":train_loss_array,"Valid Loss":valid_loss_array})
    loss_result.to_csv("./result/loss_result_"+current_time+".csv",encoding="utf-8-sig")
    test_result = pd.DataFrame({"Epoch":epoch_array,"Test Accuracy":test_accuracy_array})
    test_result.to_csv("./result/test_result_"+current_time+".csv",encoding="utf-8-sig")
    
    """
    evaluation = pd.DataFrame({"Train_Accuracy":train_accuracy_array,"Valid_Accuracy":valid_accuracy_array,
                               "Train_Loss":train_loss_array,"Valid_Loss":valid_loss_array})
    evaluation.to_csv("./result/evaluation.csv",encoding="utf-8-sig")
    """
