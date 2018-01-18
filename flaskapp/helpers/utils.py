from flask import request


class AppUtils:
    def __init__(self):
        pass

    def get_browser_detail(self):
        browser = request.user_agent.browser
        version = request.user_agent.version and int(request.user_agent.version.split('.')[0])
        platform = request.user_agent.platform
        user_agent = request.user_agent.string
        return {"browser": browser, "version": version, "platform": platform, "user_agent": user_agent}

    def is_compatible_for_app(self):
        browser_detail = self.get_browser_detail()
        if browser_detail['platform']:
            if (browser_detail['platform'] == 'android') \
                    or (browser_detail['platform'] == 'iphone'):
                return False
        return True
