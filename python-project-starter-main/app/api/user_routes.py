from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db, Canvas, follows, Ink
from app.forms import ProfileEditForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# get ONE user on ink page - USE WITH CAUTION!
# this route uses routabout measures to query for the user (user inkId)
# IF YOU DONT HAVE DIRECT ACCESS TO A SPECIFIC INK_ID, DO NOT USE THIS ROUTE!
@user_routes.route('/<int:id>')
@login_required
def user(id):
    # this id being passed in is actually the ink id
    # using the ink id to find the first ink matching id
    ink = Ink.query.get(id)
    # find user using ink property...
    user = User.query.get(ink.creator_id)

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
