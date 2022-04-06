import pandas as pd
import numpy as np
import sys
import json

tooth_array = [47,46,45,44,43,42,41,37,36,35,34,33,32,31,27,26,25,24,23,22,21,17,16,15,14,13,12,11]
pos_array = ["DB","B","MB","DL","L","ML"]

class Preprocess(object):
    def __init__(self):
        self.data=pd.DataFrame()
    def insert(self,raw_data):
        res_columns=['姓名','病历号','治疗时间','第一次就诊年龄','规律复查__0','规律复查__1','留存牙数','性别__0.0','性别__1.0','工号__学生','工号__老师']

        for tooth in tooth_array:
            for pos in pos_array:
                res_columns.append("@"+str(tooth)+"@PD@"+pos)
            for pos in pos_array:
                res_columns.append("@"+str(tooth)+"@PD@"+pos+"@Flag")
            for pos in pos_array:
                res_columns.append("@"+str(tooth)+"@BI@"+pos)
            res_columns.append("@"+str(tooth)+"@Flag")
            res_columns.append("@"+str(tooth)+"@FI@B")
            res_columns.append("@"+str(tooth)+"@FI@L")
            res_columns.append("@"+str(tooth)+"@BI@颊侧")
            res_columns.append("@"+str(tooth)+"@BI@舌侧")
            res_columns.append("@"+str(tooth)+"@AL附着丧失@颊侧")
            res_columns.append("@"+str(tooth)+"@AL附着丧失@舌侧")
            res_columns.append("@"+str(tooth)+"@动度")
            for pos in pos_array:
                res_columns.append("@"+str(tooth)+"@溢脓@"+pos)
            for pos in pos_array:
                res_columns.append("@"+str(tooth)+"@龈退缩@"+pos)
            for pos in pos_array:
                res_columns.append("@new@"+str(tooth)+"@PD@"+pos)
        N=128
        data=pd.DataFrame(columns=res_columns,index=[0])
        dt1=raw_data['patientInfo']
        data['姓名']=dt1['name']
        data['性别__1.0']=1 if dt1['gender'] == '男' else 0
        data['性别__0.0']=1-data['性别__1.0']
        data['病历号']=dt1['patientID']
        data['第一次就诊年龄']=30 if dt1['firstVisitAge']=='' else int(dt1['firstVisitAge'])
        data['治疗时间']=90 if dt1['treatTime']=='' else int(dt1['treatTime'])
        data['规律复查__1']=1 if dt1['isRegular']=='是' else 0
        data['规律复查__0']=1-data['规律复查__1']
        data['工号__老师']=1 if dt1['isTeacher']=='是' else 0
        data['工号__学生']=1 - data['工号__老师']
        for i in range(len(raw_data['teethArray'])):
            dt=raw_data['teethArray'][i]
            tooth=dt['teethID']
            if (int(dt['teethID'])) not in tooth_array:
                print("continue", tooth)
                continue
            #输入牙齿数据
            data["@"+str(tooth)+"@Flag"]=0
            for pos in pos_array:
                # print(dt['PD_'+pos])
                data["@"+str(tooth)+"@PD@"+pos]=0 if dt['PD_'+pos]=='' else dt['PD_'+pos]
                data["@"+str(tooth)+"@BI@"+pos]=0 if dt['BI_'+pos]=='' else dt['BI_'+pos]
                data["@"+str(tooth)+"@溢脓@"+pos]=0 if dt['溢脓_'+pos]=='' else dt['溢脓_'+pos]
                data["@"+str(tooth)+"@龈退缩@"+pos]=0 if dt['龈退缩_'+pos]=='' else dt['龈退缩_'+pos]
            data["@"+str(tooth)+"@FI@B"]=0 if dt['FI_B']=='' else dt['FI_B']
            data["@"+str(tooth)+"@FI@L"]=0 if dt['FI_L']=='' else dt['FI_L']
            data['动度']=0 if dt['动度']=='' else dt['动度']
        new_data_1=data
        array = ["@44@PD@DB","@44@PD@B","@44@PD@MB","@44@PD@DL","@44@PD@L","@44@PD@ML"]
        print("----------------------",data[array])

        #PD
        for tooth in tooth_array:
            new_data_1["@"+str(tooth)+"@Flag"]=0
            for pos in pos_array:
                new_data_1["@" + str(tooth) + "@PD@" + pos].fillna(0,inplace=True)
                new_data_1["@" + str(tooth) + "@PD@" + pos+"@Flag"]=(int(new_data_1["@" + str(tooth) + "@PD@" + pos])>=5)*1
                new_data_1["@"+str(tooth)+"@Flag"]+=int(new_data_1["@" + str(tooth) + "@PD@" + pos])
            new_data_1["@"+str(tooth)+"@Flag"]=(new_data_1["@"+str(tooth)+"@Flag"]>0)*1
        new_data_1["留存牙数"]=0
        for tooth in tooth_array:
            new_data_1["留存牙数"] += new_data_1["@"+str(tooth)+"@Flag"]
        print("PD done")
        #BI
        for tooth in tooth_array:
            new_data_1["@"+str(tooth)+"@BI@颊侧"]=-1
            new_data_1["@"+str(tooth)+"@BI@舌侧"]=-1
            for pos in pos_array:
                new_data_1["@"+str(tooth)+"@BI@" + pos].fillna(-1,inplace=True)

        for index,row in new_data_1.iterrows():
            for tooth in tooth_array:
                BI_B = max(int(new_data_1.loc[index,"@"+str(tooth)+"@BI@DB"]),int(new_data_1.loc[index,"@"+str(tooth)+"@BI@B"]),int(new_data_1.loc[index,"@"+str(tooth)+"@BI@MB"]))
                BI_L = max(int(new_data_1.loc[index,"@"+str(tooth)+"@BI@DL"]),int(new_data_1.loc[index,"@"+str(tooth)+"@BI@L"]),int(new_data_1.loc[index,"@"+str(tooth)+"@BI@ML"]))
                new_data_1.loc[index,"@"+str(tooth)+"@BI@颊侧"] = BI_B
                new_data_1.loc[index,"@"+str(tooth)+"@BI@舌侧"] = BI_L
        for tooth in tooth_array:
            new_data_1.loc[new_data_1["@"+str(tooth)+"@BI@颊侧"]==-1,"@"+str(tooth)+"@BI@颊侧"]=np.nan
            new_data_1.loc[new_data_1["@"+str(tooth)+"@BI@舌侧"]==-1,"@"+str(tooth)+"@BI@舌侧"]=np.nan
        for tooth in tooth_array:
            for pos in pos_array:
                new_data_1.drop(["@"+str(tooth)+"@BI@"+pos],axis=1,inplace=True)
        print("BI DOne")
        #动度
        for tooth in tooth_array:
            new_data_1["@"+str(tooth)+"@动度1"]=0
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="1-","@"+str(tooth)+"@动度1"]=0.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="-1","@"+str(tooth)+"@动度1"]=0.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]==-1,"@"+str(tooth)+"@动度1"]=0.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="2-","@"+str(tooth)+"@动度1"]=1.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="-2","@"+str(tooth)+"@动度1"]=1.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]==-2,"@"+str(tooth)+"@动度1"]=1.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="3-","@"+str(tooth)+"@动度1"]=2.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="-3","@"+str(tooth)+"@动度1"]=2.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]==-3,"@"+str(tooth)+"@动度1"]=2.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="1+","@"+str(tooth)+"@动度1"]=1.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="2+","@"+str(tooth)+"@动度1"]=2.5
            new_data_1.loc[new_data_1["@"+str(tooth)+"@动度"]=="3+","@"+str(tooth)+"@动度1"]=3.5
            new_data_1.drop(["@"+str(tooth)+"@动度"],axis=1,inplace=True)
            new_data_1.rename(columns={"@"+str(tooth)+"@动度1":"@"+str(tooth)+"@动度"},inplace=True)
        print("Dong du")
        #AL
        for tooth in tooth_array:
            new_data_1["@"+str(tooth)+"@AL附着丧失@颊侧"]=0
            new_data_1["@"+str(tooth)+"@AL附着丧失@舌侧"]=0
        for tooth in tooth_array:
            for pos in pos_array:
                new_data_1["@"+str(tooth)+"@龈退缩@"+pos].fillna(0,inplace=True)
                new_data_1["@"+str(tooth)+"@AL附着丧失@"+pos] = int(new_data_1["@"+str(tooth)+"@PD@"+pos]) + int(new_data_1["@"+str(tooth)+"@龈退缩@"+pos])
        print("AL Done 1")
        for index,row in new_data_1.iterrows():
            for tooth in tooth_array:
                BI_B = max(new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@DB"],new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@B"],new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@MB"])
                BI_L = max(new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@DL"],new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@L"],new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@ML"])
                new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@颊侧"] = BI_B
                new_data_1.loc[index,"@"+str(tooth)+"@AL附着丧失@舌侧"] = BI_L

        for tooth in tooth_array:
            for pos in pos_array:
                new_data_1.drop(["@"+str(tooth)+"@龈退缩@"+pos],axis=1,inplace=True)
                new_data_1.drop(["@"+str(tooth)+"@AL附着丧失@"+pos],axis=1,inplace=True)
        print("AL Done")
        new_data_8=new_data_1
        none_value = -5
        for tooth in tooth_array:
            new_data_8["@"+str(tooth)+"@BI@颊侧"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@BI@舌侧"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@FI@B"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@FI@L"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@DB"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@B"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@MB"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@DL"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@L"].fillna(0,inplace=True)
            new_data_8["@"+str(tooth)+"@溢脓@ML"].fillna(0,inplace=True)
        for index,row in new_data_8.iterrows():
            for tooth in tooth_array:
                if new_data_8.loc[index,"@"+str(tooth)+"@Flag"] == 0:
                    new_data_8.loc[index,"@"+str(tooth)+"@FI@B"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@FI@L"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@动度"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@DB"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@B"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@MB"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@DL"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@L"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@溢脓@ML"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@BI@颊侧"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@BI@舌侧"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@AL附着丧失@颊侧"] = none_value
                    new_data_8.loc[index,"@"+str(tooth)+"@AL附着丧失@舌侧"] = none_value
        self.data=pd.DataFrame(np.repeat(new_data_8.values,N,axis=0),columns=new_data_8.columns)

        self.data.to_csv('test.csv',encoding = "utf-8")
        return self.data
