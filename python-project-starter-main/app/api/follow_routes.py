from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Follow

follow_routes = Blueprint('follow', __name__)


@follow_routes.route('')
@login_required
def follows():
    id = current_user.get_id()
    followers = Follow.query.filter(Follow.follower_id == id).all()
    followeds = Follow.query.filter(Follow.followed_id == id).all()
    print(current_user, '---------------')
    return {
     'followers': {'followers': [follower.to_dict() for follower in followers]},
      'followeds': {'followed': [followed.to_dict() for followed in followeds]}
    }
