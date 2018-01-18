from functools import wraps
from flask import request
from flask_jsonpify import jsonify


def check_auth(access_token):
    """This function is called to check if a access_token is valid."""
    return access_token == 'admin'


def authenticate():
    """Sends a 401 response that enables basic auth."""
    result = {
        'status': 401,
        'msg': 'Could not verify your access level for that URL. You have to login with proper credentials'
    }
    return jsonify(result)


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        access_token = request.environ.get('HTTP_AUTHORIZATION')
        if not access_token or not check_auth(access_token):
            return authenticate()
        return f(*args, **kwargs)
    return decorated

