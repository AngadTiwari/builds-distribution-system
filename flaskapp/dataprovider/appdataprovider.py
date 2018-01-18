from flask_restful import Api

from flaskapp.api_modals.profile import GetProfile
from flaskapp.api_modals.contacts import GetUserContacts
from flaskapp.api_modals.project import GetAllProjects, AddProject, GetProject
from flaskapp.api_modals.version import GetVersion
from flaskapp.api_modals.collaborator import UpdateCollaborator
from flaskapp.api_modals.sharing import ShareVersionsLink


class AppDataProvider:
    def __init__(self, app):
        self.api = Api(app)
        self.api.add_resource(GetProfile, '/api/v1/profile/<string:_id>')
        self.api.add_resource(GetUserContacts, '/api/v1/contacts/<string:_id>')
        self.api.add_resource(GetAllProjects, '/api/v1/projects')
        self.api.add_resource(AddProject, '/api/v1/project')
        self.api.add_resource(GetProject, '/api/v1/project/<string:_id>')
        self.api.add_resource(GetVersion, '/api/v1/version/<string:_id>')
        self.api.add_resource(UpdateCollaborator, '/api/v1/collaborator')
        self.api.add_resource(ShareVersionsLink, '/api/v1/sharing')
