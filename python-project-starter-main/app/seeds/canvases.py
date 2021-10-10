from app.models import db, Canvas


# Adds a demo user, you can add other users here if you want
def seed_canvases():
    canvas1 = Canvas(
        creator_id = 1,
        name = "My Canvas",
    )
    canvas2 = Canvas(
        creator_id = 2,
        name = "This is Canvas 2",
    )

    db.session.add(canvas1)
    db.session.add(canvas2)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_canvases():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
