import functools
from . import db as database
from datetime import datetime
from scripts import meteomatics_connect as m
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)

from werkzeug.exceptions import abort

# from flaskr.auth import login_required


bp = Blueprint('data', __name__, url_prefix='/data')

@bp.route('/soilmoisture', methods=('GET'))
#@login_required

def soilmoisture():
    id = request.args.get('id')
    db = database.get_db()
    request = db.table('soilmoisture').select('*').eq('id', id).execute()
    dataset = m.get_soil_moisture_from_region(
        region=m.Region(
            top_right=(request['region'][0][0], request['region'][0][1]),
            bot_left=(request['region'][1][0], request['region'][1][1])
        ),
        start_date= datetime.strptime(request['start_date'], "%Y-%m-%d %H:%M:%S"),
        end_date= datetime.strptime(request['end_date'], "%Y-%m-%d %H:%M:%S"),
        interval_hours=request['interval_hours'],
        step=(request['step'][0], request['step'][1])
        )
    return


