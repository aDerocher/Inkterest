from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Follow

follow_routes = Blueprint('follow', __name__)


@follow_routes.route('/followers')
@login_required
def followers():
    id = current_user.get_id()
    followers = Follow.query.filter(Follow.follower_id == id).all()
    return {'Followers': [follower.to_dict() for follower in followers]}



@follow_routes.route('/followeds', methods=['GET'])
@login_required
def followeds():
    id = current_user.get_id()
    followeds = Follow.query.filter(Follow.followed_id == id).all()
    return {'Followed': [followed.to_dict() for followed in followeds]}
