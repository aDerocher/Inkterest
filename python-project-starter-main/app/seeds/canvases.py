from app.models import db, Canvas


# Adds a demo user, you can add other users here if you want
def seed_canvases():
    canvas1 = Canvas(
        creator_id = 1,
        name = "Favorite Tattoos",
    )
    canvas2 = Canvas(
        creator_id = 1,
        name = "Inspirational Work",
        private_canvas = True
    )
    canvas02 = Canvas(
        creator_id = 1,
        name = "Demo Private Canvas",
    )

    canvas3 = Canvas(
        creator_id = 2,
        name = "My Favorites",
    )
    canvas4 = Canvas(
        creator_id = 2,
        name = "Interesting Ones",
    )
    canvas04 = Canvas(
        creator_id = 2,
        name = "Leenas Private Canvas",
        private_canvas = True
    )

    canvas5 = Canvas(
        creator_id = 3,
        name = "Work by Joe",
    )
    canvas6 = Canvas(
        creator_id = 3,
        name = "Like!!!!",
    )
    canvas06 = Canvas(
        creator_id = 3,
        name = "Hidden Canvas",
        private_canvas = True
    )


    canvas7 = Canvas(
        creator_id = 4,
        name = "Susans Art",
    )
    canvas8 = Canvas(
        creator_id = 4,
        name = "Saved",
    )

    canvas9 = Canvas(
        creator_id = 5,
        name = "Good ones",
    )
    canvas10 = Canvas(
        creator_id = 5,
        name = "Inspiration",
    )

    canvas11 = Canvas(
        creator_id = 6,
        name = "Detailed",
    )
    canvas12 = Canvas(
        creator_id = 6,
        name = "Stuff I like",
    )

    canvas13 = Canvas(
        creator_id = 7,
        name = "Canvas of Inks",
    )
    canvas14 = Canvas(
        creator_id = 7,
        name = "My Saved Canvas",
        private_canvas = True
    )

    canvas15 = Canvas(
        creator_id = 8,
        name = "Bookmarked Tats",
    )
    canvas16 = Canvas(
        creator_id = 8,
        name = "Rad Tattoos",
        private_canvas = True
    )

    canvas17 = Canvas(
        creator_id = 9,
        name = "Designs for Me",
    )
    canvas18 = Canvas(
        creator_id = 9,
        name = "More Inspiration",
        private_canvas = True
    )

    db.session.add(canvas1)
    db.session.add(canvas2)
    db.session.add(canvas02)
    db.session.add(canvas3)
    db.session.add(canvas04)
    db.session.add(canvas4)
    db.session.add(canvas5)
    db.session.add(canvas06)
    db.session.add(canvas6)
    db.session.add(canvas7)
    db.session.add(canvas8)
    db.session.add(canvas9)
    db.session.add(canvas10)
    db.session.add(canvas11)
    db.session.add(canvas12)
    db.session.add(canvas13)
    db.session.add(canvas14)
    db.session.add(canvas15)
    db.session.add(canvas16)
    db.session.add(canvas17)
    db.session.add(canvas18)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_canvases():
    db.session.execute('TRUNCATE canvases RESTART IDENTITY CASCADE;')
    db.session.commit()
