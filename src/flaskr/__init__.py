import os
from datetime import datetime
from flask import Flask

def create_app():
    # create and configure the app
    app = Flask(__name__)
    app.config.from_mapping(
        SECRET_KEY='dev'
    )
    try:
        os.makedirs(app.instance_path, exist_ok=True) 
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return str(datetime(2024, 10, 8))

    from . import data
    app.register_blueprint(data.bp)

    return app
