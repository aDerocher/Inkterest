from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import NewInkForm, EditInkForm
from app.models import db, Ink, Canvas, User
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename
)

ink_routes = Blueprint('inks', __name__)

# Get all inks - simple
@ink_routes.route('')
def get_inks():
    inks = Ink.query.all()
    return {'inks': [ink.to_dict() for ink in inks]}


# Get one ink - simple
@ink_routes.route('/<int:ink_id>')
def get_ink(ink_id):
    ink  = Ink.query.get(ink_id)
    return ink.to_dict()


# Create new ink
@ink_routes.route('/new-ink', methods=["POST"])
@login_required
def upload_ink():
    form = NewInkForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    ink = request.files['image']

    if not allowed_file(ink.filename):
        return {"errors": "file type not permitted"}, 400

    ink.filename = get_unique_filename(ink.filename)

    upload = upload_file_to_s3(ink)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message

        return upload, 400
    
    url = upload["url"]

    if form.validate_on_submit():
        new_ink = Ink(
            creator_id=current_user.get_id(),
            creator_username=current_user.username,
            image=url,
            title=form.title.data,
            subtitle=form.subtitle.data,
            destination_link=form.destination_link.data,
        )


        db.session.add(new_ink)
        db.session.commit()

        if form.canvas_id.data != None:
            new_ink.canvases.append(Canvas.query.get(form.canvas_id.data))
            db.session.commit()

        return new_ink.to_dict()


# edit ink
@ink_routes.route('/<int:ink_id>/edit', methods=['PATCH'])
@login_required
def edit_ink(ink_id):
    ink = Ink.query.get(ink_id)

    form = EditInkForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if current_user and form.validate_on_submit():
        ink.title = form.title.data
        ink.subtitle = form.subtitle.data
        ink.destination_link = form.destination_link.data
        db.session.commit()

    return ink.to_dict()


# delete ink - simple
@ink_routes.route('/<int:ink_id>/delete', methods=['DELETE'])
@login_required
def delete_ink(ink_id):
    ink = Ink.query.get(ink_id)

    # note for future reference: current_user.get_id() is returned as a string!
    user_id = current_user.get_id()

    # Make sure to test this validation once login form is setup!
        # condition - Try to delete an ink a different user - Should not work
        # condition - Try to delete as a logged out user - Should not work

    if int(user_id) == int(ink.creator_id):
        db.session.delete(ink)
        db.session.commit()

    return ink.to_dict()
