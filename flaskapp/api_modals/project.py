from flask_restful import Resource, request
from flask_jsonpify import jsonify
import json
from flaskapp.helpers.decorators import requires_auth


class AddProject(Resource):
    @requires_auth
    def post(self):
        # parser = reqparse.RequestParser()
        # parser.add_argument('name', type=str, help='project name')
        # parser.add_argument('description', type=str, help='project description')
        # parser.add_argument('type', type=str, help='project type - android, ios or both')
        # parser.add_argument('androidbundleid', type=str, help='project android bundle id')
        # parser.add_argument('iosbundleid', type=str, help='project ios bundle id')
        # args = parser.parse_args(strict=True)
        json_request = json.loads(request.data.decode('utf8'))

        result = {
            "msg": "project created"
        }
        return jsonify(result)


class GetAllProjects(Resource):
    @requires_auth
    def get(self):
        result = [
            {
                "_id": "5a4244694f39a1deebfe18ae",
                "name": "News Bucket"
            }
        ]
        return jsonify(result)


class GetProject(Resource):
    @requires_auth
    def get(self, _id):
        result = {
            "_id": _id,
            "name": "News Bucket",
            "owner": {
                "_id": "5a4244694f39a1deebfe18ae",
                "name": "angad tiwari",
                "email": "angad.tiwari@infobeans.com"
            },
            "collaborators": [
                {
                    "_id": "5a4244694f39a1deebfe18ae",
                    "name": "angad tiwari",
                    "email": "angad.tiwari@infobeans.com"
                }
            ],
            "versions": {
                "android": [
                    {
                        "_id": "5a4244694f39a1deebfe18ae",
                        "name": "News Bucket ver 1.0",
                        "version": 1.0
                    }
                ],
                "ios": [
                    {
                        "_id": "5a4244694f39a1deebfe18ae",
                        "name": "News Bucket ver 1.1",
                        "version": 1.1
                    }
                ]
            }
        }
        return jsonify(result)


