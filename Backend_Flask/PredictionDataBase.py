import pymongo

class PredictionDataBase(object):
    def __init__(self):
        self.url = 'mongodb://localhost:27017'

    def insert(self, json):
        client = pymongo.MongoClient(self.url)
        db = client["database"]
        db["prediction_data"].update_one({'病历号': json['病历号']}, {"$set": json}, True)
        client.close()

    def query(self, ID):
        client = pymongo.MongoClient(self.url)
        db = client["database"]
        res = db["prediction_data"].find({"病历号":ID})
        client.close()

        return res[0]



