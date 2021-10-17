from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db, Canvas, follows, Ink
from app.forms import ProfileEditForm

user_routes = Blueprint('users', __name__)


@user_routes.route('')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# get ONE user on ink page - USE WITH CAUTION!
@user_routes.route('/<int:user_id>/inks/<int:ink_id>')
@login_required
def user(user_id, ink_id):
    ink = Ink.query.get(ink_id)
    # find user using ink property...
    user = User.query.get(user_id)

    return user.to_dict()


# edit user profile
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

# ========================= FOLLOWS ==============================

# follow a user
@user_routes.route("/<int:id>/follow", methods=["POST"])
@login_required
def follow_user(id):
    user = User.query.get(id)
    # print(int(current_user.get_id())not in user.followers, '------------------------------------------------------------')
    # userTuple = (current_user.username, int(current_user.get_id))
    # if userTuple not in user.followers:
    user.followers.append(User.query.get(int(current_user.get_id())))

    db.session.commit()

    return user.to_dict()

# UNfollow a user
@user_routes.route("/<int:id>/unfollow", methods=["POST"])
@login_required
def unfollow_user(id):
    user = User.query.get(id)

    user.followers.remove(User.query.get(int(current_user.get_id())))

    db.session.commit()

    return user.to_dict()
