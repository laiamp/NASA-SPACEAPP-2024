import functools
from . import db as database
from datetime import datetime
from scripts import meteomatics_connect as m
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)

from werkzeug.exceptions import abort

# from flaskr.auth import login_required


bp = Blueprint('data', __name__)

@bp.route('/', methods=('GET'))
def data():
    return "hello"

@bp.route('/soilmoisture', methods=('GET', 'POST'))
#@login_required
def soilmoisture():
    id = request.args.get('id')
    if not id:
        return "ID is required", 400
    
    db = database.get_db()
    soil_request = db.table('soilmoisture').select('*').eq('id', id).execute()['data']
    
    if not soil_request:
        return "No data found", 404

    dataset = m.get_soil_moisture_from_region(
        region=m.Region(
            top_right=(soil_request['region'][0][0], soil_request['region'][0][1]),
            bot_left=(soil_request['region'][1][0], soil_request['region'][1][1])
        ),
        start_date=datetime.strptime(soil_request['start_date'], "%Y-%m-%d %H:%M:%S"),
        end_date=datetime.strptime(soil_request['end_date'], "%Y-%m-%d %H:%M:%S"),
        interval_hours=soil_request['interval_hours'],
        step=(soil_request['step'][0], soil_request['step'][1])
    )
    
    return dataset


