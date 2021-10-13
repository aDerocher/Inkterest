from .db import db
from datetime import datetime
from .ink_categories import ink_categories

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)

    inks = db.relationship(
        "Ink",
        back_populates="categories",
        secondary=ink_categories
        )

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
        }
