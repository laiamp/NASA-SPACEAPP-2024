import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)

from flaskr.db import get_db
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from flaskr.db import get_db


bp = Blueprint('data', __name__, url_prefix='/data')

@bp.route('/soilmoisture', methods=('GET'))
#@login_required
"""
get_soil_moisture_from_region(
    region: Region,
    start_date: datetime,
    end_date: datetime,
    interval_hours: int,
    step: tuple[float, float],
    output_format: str = 'csv'
) """

def soilmoisture(){
    id = request.args.get('id')
    db = get_db()
    row = db.execute(
                'SELECT * FROM soilmoisture WHERE id = ?;',
                (id,)
            ).fetchall()
    get_soil_moisture_from_region()
}