from app.models import db, User, Follow


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        profile_picture='https://randomuser.me/api/portraits/men/13.jpg',
        email='demo@aa.com',
        first_name='demo',
        last_name='dude',
        password='password',
        )
    leena = User(
        username='leena',
        profile_picture='https://randomuser.me/api/portraits/women/23.jpg',
        email='leena@aa.com',
        first_name='leena',
        last_name='rando',
        password='password',
        )
    rick = User(
        username='rick',
        profile_picture='https://randomuser.me/api/portraits/men/2.jpg',
        email='rick@aa.com',
        first_name='Rick',
        last_name='Rolls',
        password='password',
        )
        
    db.session.add(demo)
    db.session.add(leena)
    db.session.add(rick)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
