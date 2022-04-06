from importlib.abc import PathEntryFinder
import json
from preprocess import Preprocess
from prediction import Model
from PredictionDataBase import PredictionDataBase
from PatientDatabase import PatientDataBase

class Process(object):
    def __init__(self):
        print("\t\tProcess Object Initializaion!\t\t")

    def predictById(self, id):
        try:
            print(id)
            res = self.patientQuery(id)
            print("get patient info ", res)
            res = self.predict(res)
            print("predict json success ",res)
            return res
        except Exception as e:
            print(e)
            print("Error.")

    
    def predict(self,data):
        try:
            if isinstance(data,str):
                data = json.loads(data)
            preprocess = Preprocess()
            preprocess_data = preprocess.insert(data)
            preprocess_data.to_csv('pre.csv')
            print("start model")
            model = Model(preprocess_data)
            print("model Load success")
            prediction_data = model.predict()
            print("predict result",prediction_data)
            tooth_array = [47, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 27, 26, 25, 24, 23, 22, 21,
                       17, 16, 15, 14, 13, 12, 11]
            preprocess_json = dict()
            for i in range(0,28):
                # print(prediction_data.iloc[0,2+i*12:2+(i+1)*12])
                preprocess_json[str(tooth_array[i])] = list(prediction_data.iloc[0,2+i*12:2+(i+1)*12])
            # print(preprocess_json)
            return preprocess_json

            # print(prediction_data)
            # preprocess_json = json.loads(prediction_data.to_json(orient="records", force_ascii=False))[0]
            # print("Predict Result:", preprocess_json)
            # db = PredictionDataBase()
            # db.insert(preprocess_json)
        
        except Exception as e:
            print(e)
            print("Predition Error!")

    def predictionQuery(self,ID):
        try:
            db = PredictionDataBase()
            json = db.query(ID)
            return json
        except:
            print("PredictionQuery Error!")

    def patientInsert(self,data):
        try:
            print(data)
            if isinstance(data, str):
                data = json.loads(data)
            print(data)
            print("create link")
            db = PatientDataBase()
            print(db)
            db.insert(data)
        except Exception as e:
            print(e)
            print("PatientInsert Error!")

    def patientQuery(self,ID):
        try:
            db = PatientDataBase()
            json = db.query(ID)
            return json
        except Exception as e:
            print(e)
            print("PatientQuery Error!")

    def patientListQuery(self):
        try:
            db = PatientDataBase()
            res = db.query_all()
            return res
        except Exception as e:
            print(e)
            print("Query Patient List Failed..")