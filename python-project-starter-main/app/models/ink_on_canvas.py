from .db import db
from datetime import datetime

class Ink_On_Canvas(db.Model):
    __tablename__ = 'ink_on_canvases'

    id = db.Column(db.Integer, primary_key=True)
    ink_id = db.Column(db.Integer, db.ForeignKey("inks.id"), nullable=False)
    canvas_id = db.Column(db.Integer, db.ForeignKey("canvases.id"), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'ink_id': self.ink_id,
            'canvas_id': self.canvas_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
