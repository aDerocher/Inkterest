from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db, Canvas, follows
from app.forms import ProfileEditForm






user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# edit user
@user_routes.route("/<int:id>/edit", methods=["PATCH"])
@login_required
def edit_user(id):
    user = User.query.get(id)

    form = ProfileEditForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if current_user and form.validate_on_submit():
        user.first_name = form.first_name.data
        user.last_name = form.last_name.data
        user.email = form.email.data
        user.username = form.username.data
        db.session.commit()

    return user.to_dict()

    return None
