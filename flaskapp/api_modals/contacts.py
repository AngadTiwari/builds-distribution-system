from flask_restful import Resource
from flask_jsonpify import jsonify
from flaskapp.helpers.decorators import requires_auth


class GetUserContacts(Resource):
    @requires_auth
    def get(self, _id):
        result = {
            "_id": _id,
            "contacts": [
                "prabhat.kasera@infobeans.com",
                "prashoor.chitnis@infobeans.com"
            ]
        }
        return jsonify(result)
