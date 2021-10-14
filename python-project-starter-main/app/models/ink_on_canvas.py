from .db import db


inks_on_canvases = db.Table(
    "inks_on_canvases",
    db.Column(
        "ink_id",
        db.Integer,
        db.ForeignKey("inks.id"),
        primary_key=True
    ),
    db.Column(
        "canvas_id",
        db.Integer,
        db.ForeignKey("canvases.id"),
        primary_key=True
    )
)
