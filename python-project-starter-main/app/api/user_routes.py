from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Follow


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
    followers = Follow.query.filter(Follow.follower_id == id).all()
    # x = {'followers': [follower.to_dict() for follower in followers]}
    followeds = Follow.query.filter(Follow.followed_id == id).all()
    # y = {'followed': [followed.to_dict() for followed in followeds]}
    return {
        'user': user.to_dict(),
        'followers': {'followers': [follower.to_dict() for follower in followers]},
        'followeds': {'followeds': [followed.to_dict() for followed in followeds]}
      }
