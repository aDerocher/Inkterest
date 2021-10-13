from .db import db
from datetime import datetime

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)

    # ink = db.relationship(
    #     "Ink", back_populates="ink_types")

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
        }
