from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.forms import NewInkForm
from app.models import db, Ink
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

ink_routes = Blueprint('inks', __name__)


@ink_routes.route('/new-ink', methods=["POST"])
@login_required
def upload_image():
    form = NewInkForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    ink = request.files["image"]

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
            creator_id=current_user.id,
            image=url,
            title=form.title.data,
            subtitle=form.subtitle.data,
            destination_link=form.destination_link.data
        )

    db.session.add(new_ink)
    db.session.commit()

    return {"url": url}
