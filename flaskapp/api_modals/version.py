from flask_restful import Resource
from flask_jsonpify import jsonify
from flaskapp.helpers.decorators import requires_auth


class GetVersion(Resource):
    @requires_auth
    def get(self, _id):
        result = {
            "_id": "5a4244694f39a1deebfe18ae",
            "name": "News Bucket ver 1.0",
            "createdon": "2018-11-07 11:00:00",
            "createdby": {
                "_id": "5a4244694f39a1deebfe18ae",
                "name": "angad tiwari",
                "email": "angad.tiwari@infobeans.com"
            },
            "sharelink": "Wj31mn",
            "installlink": ""
        }
        return jsonify(result)
