from app.models import db, Ink


# Adds a demo user, you can add other users here if you want
def seed_inks():
    ink1 = Ink(
            creator_id = 1
            image = "",
            title = "Ink Title",
            subtitle = "This is my first tattoo!",
            destination_link = "google.com",
            category_1 = 1,
            category_2 = 2,
            category_3 = 3,
    )

    db.session.add(ink1)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_inks():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
