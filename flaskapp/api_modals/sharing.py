from flask_restful import Resource, request
from flask_jsonpify import jsonify
import json
from flaskapp.helpers.decorators import requires_auth


class ShareVersionsLink(Resource):
    @requires_auth
    def post(self):
        # dummy api request
        # {
        #     "versions": [
        #         "5a4244694f39a1deebf8ae"
        #     ],
        #     "shareby": "5a4244694f39a1deebfe18ae",
        #     "shareto": {
        #         "app_user": {
        #             "_id": "5a4244694f39a1deebfe18ae",
        #             "email": "prabhat.kasera@infobeans.com"
        #         },
        #         "non_appuser: {
        #         "email": "john12@gmail.com"
        #         }
        #     }
        # }
        json_request = json.loads(request.data.decode('utf8'))

        result = {
            "msg": "project share link created & mail send to all emails",
            "sharelink": "hg650a"
        }
        return jsonify(result)
