from .db import db
from datetime import datetime
from .ink_categories import ink_categories
from .ink_on_canvas import inks_on_canvases


class Ink(db.Model):
    __tablename__ = 'inks'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    image = db.Column(db.String(2000), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(500))
    destination_link = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    categories = db.relationship(
        "Category",
        back_populates="inks",
        secondary=ink_categories
        )

    canvases = db.relationship(
        "Canvas",
        back_populates="inks",
        secondary=inks_on_canvases
        )
    
    # ioc = db.relationship("Ink_On_Canvas", cascade="all,delete", back_populates="inks")

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'image': self.image,
            'title': self.title,
            'subtitle': self.subtitle,
            'destination_link': self.destination_link,
            'categories': [category.to_dict() for category in self.categories],
            'canvases': [canvases.to_dict() for canvas in self.canvases],
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
