from .db import db
from datetime import datetime

class Ink(db.Model):
    __tablename__ = 'inks'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image = db.Column(db.String(2000), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(500))
    destination_link = db.Column(db.String(2000))
    category_1 = db.Column(db.Integer, db.ForeignKey("categories.id"))
    category_2 = db.Column(db.Integer, db.ForeignKey("categories.id"))
    category_3 = db.Column(db.Integer, db.ForeignKey("categories.id"))
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'image': self.image,
            'title': self.title,
            'subtitle': self.subtitle,
            'destination_link': self.destination_link,
            'category_1': self.category_1,
            'category_2': self.category_2,
            'category_3': self.category_3,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
