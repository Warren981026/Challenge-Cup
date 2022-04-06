from http import client
import pymongo
from bson import json_util
 
class PatientDataBase(object):
    def __init__(self):
        self.url = 'mongodb://localhost:27017'
        print(self.url)

    def insert(self, json):
        client = pymongo.MongoClient(self.url)
        db = client["database"]
        db["patient_data"].update_one({'病历号': json['patientInfo']['patientID']}, {"$set": json}, True)
        client.close()

    def query(self, ID):
        client = pymongo.MongoClient(self.url)
        db = client["database"]
        res = db["patient_data"].find({"病历号":ID},{"patientInfo":1, "teethArray":1,"_id":0})
        rr = res[0]
        client.close()
        return rr
        # return json_util.dumps(rr)

    def query_all(self):
        client = pymongo.MongoClient(self.url)
        db = client["database"]
        res = []
        sets = db["patient_data"].find()
        for x in sets:
            res.append(x["patientInfo"])
        client.close()

        return res
