from pymongo import MongoClient
from flaskapp.helpers.constants import AppConstants


class MongoConnector:
    def __init__(self):
        self.client = MongoClient()
        self.client = MongoClient(AppConstants.MONGO_CONNECTION_PATH)
        self.db = self.client[AppConstants.DB_NAME]

    def get_db(self):
        return self.db

    def get_collection(self, collection_name):
        return self.db[collection_name]


