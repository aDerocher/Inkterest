from .db import db
from datetime import datetime
from .ink_on_canvas import inks_on_canvases


class Canvas(db.Model):
    __tablename__ = 'canvases'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    private_canvas = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    inks = db.relationship(
    "Ink",
    back_populates="canvases",
    secondary=inks_on_canvases
    )

    def to_dict(self):
        return {
            'id': self.id,
            'creator_id': self.creator_id,
            'name': self.name,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'inks': [ink.to_dict() for ink in self.inks]
        }
