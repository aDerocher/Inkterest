from .db import db

saved_inks = db.Table(
    "saved_inks",
    db.Column(
        "ink_id",
        db.Integer,
        db.ForeignKey("inks.id"),
        primary_key=True
    ),
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )
)
