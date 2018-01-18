from flask import Flask, render_template, session
from flaskapp.dataprovider.appdataprovider import AppDataProvider
import os

template_dir = os.path.abspath('app')
app = Flask(__name__, template_folder=template_dir)
api = AppDataProvider(app)


@app.route('/')
def index():
    if False:#not AppUtils.is_compatible_for_app:
        return render_template('unsupported.html')
    elif False:#session.get("sid", None) is None:
        return render_template('login.html')
    else:
        return render_template('index.html')


if __name__ == '__main__':
    app.run()
