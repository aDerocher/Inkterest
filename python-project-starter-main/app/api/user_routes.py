from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
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
    follow = follows.query.all()
    user = User.query.get(id)
    followers = Follow.query.filter(Follow.follower_id == id).all()
    # x = {'followers': [follower.to_dict() for follower in followers]}
    followeds = Follow.query.filter(Follow.followed_id == id).all()
    # y = {'followed': [followed.to_dict() for followed in followeds]}
    return {
        'user': user.to_dict(),
        'followers': {'followers': [follower.to_dict() for follower in followers]},
        'followeds': {'followeds': [followed.to_dict() for followed in followeds]}
      }

# edit user
@user_routes.route("/<int:id>/edit", methods=["PATCH"])
@login_required
def edit_user(id):
    user = User.query.get(id)

    form = ProfileEditForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if current_user and form.validate_on_submit():
        user.firstName = form.firstName.data
        user.lastName = form.lastName.data
        user.email = form.email.data
        user.username = form.username.data
        db.session.commit()

    return user.to_dict()

    return None
