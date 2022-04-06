# -*- coding:utf-8 -*-
from asyncio.windows_events import NULL
import json
from logging import NullHandler
from turtle import onscreenclick
from urllib import response
from flask import Flask
from flask import request, jsonify
from flask_restplus import Api, Resource, fields
from flask_cors import CORS
from process import Process


api = Process()
print(api)

# myjsontest = {"patientInfo": {"finished": False, "name": "李四", "gender": "男", "patientID": "123789", "firstVisitAge": "15", "treatTime": "20", "isRegular": "是", "isTeacher": "是"}, "teethArray": [{"finished": False, "teethID": "0", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "1", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "2", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "3", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "4", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", " 龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "5", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "6", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "7", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "8", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢 脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "9", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈 退缩_ML": ""}, {"finished": False, "teethID": "10", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退 缩_ML": ""}, {"finished": False, "teethID": "11", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "12", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "13", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", " 溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "14", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢 脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "15", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "16", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "17", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "18", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "19", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "20", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "21", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "22", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "23", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈��缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "24", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢 脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "25", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "26", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "27", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "28", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "29", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "30", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退 缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "31", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "32", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "33", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "34", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "35", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "36", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退 缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "37", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "38", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "39", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "40", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "41", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈 退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "42", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退 缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "43", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", " 动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "44", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动 度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "45", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "46", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}, {"finished": False, "teethID": "47", "PD_DB": "", "PD_B": "", "PD_MB": "", "PD_DL": "", "PD_L": "", "PD_ML": "", "FI_B": "", "FI_L": "", "BI_DB": "", "BI_B": "", "BI_MB": "", "BI_DL": "", "BI_L": "", "BI_ML": "", "动度": "", "溢脓_DB": "", "溢脓_B": "", "溢脓_MB": "", "溢脓_DL": "", "溢脓_L": "", "溢脓_ML": "", "龈退缩_DB": "", "龈退缩_B": "", "龈退缩_MB": "", "龈退缩_DL": "", "龈退缩_L": "", "龈退缩_ML": ""}]}

# api.patientInsert(myjsontest)


print(api.patientListQuery())


flask_app = Flask(__name__)
CORS(flask_app)
app = Api(app=flask_app,
    version = 1.0,
    title = "Doctor Prediction",
    description="My Description")


name_space = app.namespace('prediction', description='Main APIs')
@name_space.route("/")
class MainClass(Resource):
    
    def get(self):
        return {
            "status": "GET METHOD"
        }

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'post': 'Prediction Post' } )
    def post(self):
        try:
            jsonObj = request.json
            ID = jsonObj['ID']
            print("ID= ", ID)
            res = api.patientQuery(ID)
            # print("Patient Query Result: ",res)
            if(res == None):
                status = "no user"
                response = jsonify({
                    "statusCode": 200,
                    "status": status,
                })
                print(response.json)
                return response
            
            # print(res['patientInfo'])
            
            predictEffect = api.predictById(ID)
            
            print("Get Back Result:", predictEffect)
            print(type(predictEffect))
            responseEffect = {}
            for k,v in predictEffect.items():
                print(k, v)
                responseEffect[k] = [str(x) for x in v]
            print(responseEffect)
            response = jsonify({
				"statusCode": 200,
				"status": "User Exist",
                "patientInfo": res['patientInfo'],
                "teethArray": res['teethArray'],
                "effect": responseEffect
			})
            # print(response.json)
            return response

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            print(e)
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")



name_space2 = app.namespace('get_list', description = "Get Patient List")
@name_space2.route("/")
class MainClass2(Resource):
    def get(self):
        res = api.patientListQuery()
        return {
            "list": res,
            "status": "GET METHOD"
        }

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'post': 'Prediction Post' } )
    def post(self):
        pass



name_space3 = app.namespace('get_patient', description = "Get Patient Detail")
@name_space3.route("/")
class MainClass3(Resource):
    def get(self):
        pass

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'post': 'Prediction Post' } )
    def post(self):
        try:
            id = request.data.decode('utf-8')
            res = api.patientQuery(id)
            print(res)
            response = jsonify({
				"statusCode": 200,
				"result": res
            })
            print(response)
            return response

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            print(e)
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")
    

name_space4 = app.namespace('store', description='store infomation')
@name_space4.route("/")
class MainClass(Resource):
    
    def get(self):
        return {
            "status": "GET METHOD"
        }

    @app.doc(responses={ 200: 'OK', 400: 'Invalid Argument', 500: 'Mapping Key Error' }, 
			 params={ 'post': 'Prediction Post' } )
    def post(self):
        try:
            jsonObj = request.json
            print(jsonObj)
            print("store info")
            api.patientInsert(jsonObj)
            
            response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": "The prediction result is: "
				})
            print(response)
            return response
            return {
                "status": "GET METHOD"
            }   

        except KeyError as e:
            name_space.abort(500, e.__doc__, status = "Could not save information", statusCode = "500")
        except Exception as e:
            name_space.abort(400, e.__doc__, status = "Could not save information", statusCode = "400")

if __name__ == '__main__':
    flask_app.run(debug=True)