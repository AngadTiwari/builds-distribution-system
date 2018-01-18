from flask_restful import Resource, request
from flask_jsonpify import jsonify
import json
from flaskapp.helpers.decorators import requires_auth


class UpdateCollaborator(Resource):
    @requires_auth
    def post(self):
        # dummy api request
        # {
        #     "_id": "5a4244694f39a1deebfe18ae",
        #     "add": [
        #         "5a4244694f39a1ebfe18ae"
        #     ],
        #     "remove": [
        #         "5a4244694f39deebfe18ae"
        #     ]
        # }
        json_request = json.loads(request.data.decode('utf8'))

        result = {
            "msg": "project collaborators updated"
        }
        return jsonify(result)
