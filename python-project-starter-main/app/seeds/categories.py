from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():
    category1 = Category(
        category = "portrait"
    )
    category2 = Category(
        category = "lettering"
    )
    category3 = Category(
        category = "geometric"
    )
    category4 = Category(
        category = "minimalist"
    )
    category5 = Category(
        category = "traditional_jap"
    )
    category6 = Category(
        category = "traditional_amer"
    )
    category7 = Category(
        category = "tribal"
    )
    category8 = Category(
        category = "linework"
    )
    category9 = Category(
        category = "watercolor"
    )
    category10 = Category(
        category = "illustrative"
    )


    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
