from flask_restful import Resource
from flaskapp.helpers.decorators import requires_auth
from bson.objectid import ObjectId
from flaskapp.mongoconnector import MongoConnector
import bson


class GetProfile(Resource):
    def __init__(self):
        self.mongodb = MongoConnector()
        self.user_collection = self.mongodb.get_collection("users")

    @requires_auth
    def get(self, _id):
        cursor = self.user_collection.find_one({"_id": ObjectId(_id)})
        encoded_bson = bson.BSON.encode(cursor)
        # decoded_bson = bson.BSON.decode(encoded_bson)
        return encoded_bson
        # if cursor is not None:
        #     result = {
        #         "_id": _id,
        #         "name": cursor['name'],
        #         "email": cursor['email'],
        #         "roles": [
        #             "admin",
        #             "developer"
        #         ],
        #         "total_contacts": 42
        #     }
        #     return jsonify(result)
        # else:
        #     result = {
        #         "status": 301,
        #         "msg": "User Profile not found",
        #     }
        #     return jsonify(result)


