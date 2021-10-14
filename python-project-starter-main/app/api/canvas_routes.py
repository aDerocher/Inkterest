from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import NewCanvasForm, InkOnCanvasForm
from app.models import db, Canvas, Ink
# from app.aws import (
#     upload_file_to_s3, allowed_file, get_unique_filename)

canvas_routes = Blueprint('canvases', __name__)


# Get all canvases - simple ================================================
@canvas_routes.route('/')
def get_all_canvases():
    canvases = Canvas.query.all()
    return {'canvases': [canvas.to_dict() for canvas in canvases]}



# Create new canvas ========================================================
@canvas_routes.route('/new-canvas', methods=["POST"])
@login_required
def new_canvas():
    form = NewCanvasForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_canvas = Canvas(
            creator_id=current_user.get_id(),
            name=form.name.data,
            private_canvas=form.private_canvas.data
        )

        db.session.add(new_canvas)
        db.session.commit()
        return new_canvas.to_dict()


# Get all users canvases ========================================================
@canvas_routes.route('/users/<int:id>')
@login_required
def user(id):
    canvases = Canvas.query.filter(Canvas.creator_id == id)

    return {'usersCanvases': [canvas.to_dict() for canvas in canvases]}

# delete canvas - simple========================================================
@canvas_routes.route('/<int:canvas_id>', methods=['DELETE'])
@login_required
def delete_canvas(canvas_id):
    canvas = Canvas.query.get(canvas_id)
    # allInk_Canv_Rels = Ink_On_Canvas.query.filter(Ink_On_Canvas.canvas_id == canvasId).all()
    # db.session.delete(allInk_Canv_Rels)
    #===============================================
    # DELETES, BUT DOES NOT CASCADE TO Ink_on_canvases
    # Will hit 500 error if canvas has ink. Only blank canvases delete
    #===============================================
    db.session.delete(canvas)
    db.session.commit()

    # return "aww shit"
    return canvas.to_dict()

# Add ink to canvas ========================================================

@canvas_routes.route('/add-ink-to-canvas', methods=['POST'])
@login_required
def ink_on_canvas():
    form = InkOnCanvasForm()
    canvas_id = form.canvas_id.data
    ink_id = form.ink_id.data

    canvas = Canvas.query.get(canvas_id)
    canvas.inks.append(Ink.query.get(ink_id))

    db.session.commit()

    return canvas.to_dict()
