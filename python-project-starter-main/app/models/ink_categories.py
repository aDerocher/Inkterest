from .db import db

ink_categories = db.Table(
    "ink_categories",
    db.Column(
        "ink_id",
        db.Integer,
        db.ForeignKey("inks.id"),
        primary_key=True
    ),
    db.Column(
        "category_id",
        db.Integer,
        db.ForeignKey("categories.id"),
        primary_key=True
    )
)
