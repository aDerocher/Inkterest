from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import NewCanvasForm
from app.models import db, Canvas
# from app.aws import (
#     upload_file_to_s3, allowed_file, get_unique_filename)

canvas_routes = Blueprint('canvases', __name__)


# Get all canvases - simple
@canvas_routes.route('/')
def get_all_canvases():
    canvases = Canvas.query.all()
    return {'canvases': [canvas.to_dict() for canvas in canvases]}



# Create new canvas
@canvas_routes.route('/new-canvas', methods=["POST"])
@login_required
def new_canvas():
    form = NewCanvasForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_canvas = Canvas(
            creator_id=current_user.get_id(),
            name=form.name.data,
        )
        db.session.add(new_canvas)
        db.session.commit()
        return new_canvas.to_dict()


# delete canvas - simple
@canvas_routes.route('/<int:canvas_id>', methods=['DELETE'])
@login_required
def delete_canvas(canvas_id):
    canvas = Canvas.query.get(canvas_id)
    print(canvas)
    db.session.delete(canvas)
    db.session.commit()

    # return "aww shit"
    return canvas.to_dict()
