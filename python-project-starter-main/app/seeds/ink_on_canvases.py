from app.models import db, Ink_On_Canvas


# Adds a demo user, you can add other users here if you want
def seed_ink_on_canvases():
    ink_on_canvas1= Ink_On_Canvas(
        ink_id = 1
        canvas_id = 1
    )
    ink_on_canvas2= Ink_On_Canvas(
        ink_id = 1
        canvas_id = 2
    )

    db.session.add(ink_on_canvas1)
    db.session.add(ink_on_canvas2)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_ink_on_canvases():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
