import os
from datetime import datetime
from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return str(datetime(2024, 10, 8))

    # from . import data
    # app.register_blueprint(data.bp)
    # from . import auth
    # app.register_blueprint(auth.bp)
    
    
    return app