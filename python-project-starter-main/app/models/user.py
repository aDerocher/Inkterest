from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from .follow import follows

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    profile_picture = db.Column(db.String(2000), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)

    # followers = db.relationship(
    #     "User",
    #     secondary=follows,
    #     primaryjoin=(follows.c.follower_id == id),
    #     secondaryjoin=(follows.c.followed_id == id),
    #     backref=db.backref("following", lazy="dynamic"),
    #     lazy="dynamic",
    # )

    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.followed_id == id),
        secondaryjoin=(follows.c.follower_id == id),
        back_populates=("followed"),
        lazy="dynamic",
    )

    followed = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        back_populates=("followers"),
        lazy="dynamic",
    )


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_picture': self.profile_picture,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            # for the session user, this followers key/value is specifically returning username & id
            'followers': [(follower.username, follower.id) for follower in self.followers ],
            'followed': [(followed.username, followed.id) for followed in self.followed ],
            'created_at': self.created_at
        }
