from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        profile_picture='https://randomuser.me/api/portraits/men/50.jpg',
        email='demo@aa.com',
        first_name='demo',
        last_name='dude',
        password='password',
        )
    leena = User(
        username='leena',
        profile_picture='https://randomuser.me/api/portraits/women/50.jpg',
        email='leena@aa.com',
        first_name='leena',
        last_name='rando',
        password='password',
        )
    rick = User(
        username='rick',
        profile_picture='https://randomuser.me/api/portraits/men/49.jpg',
        email='rick@aa.com',
        first_name='Rick',
        last_name='Rolls',
        password='password',
        )
    demouser1 = User(
            username='user1',
            profile_picture='https://randomuser.me/api/portraits/men/1.jpg',
            password='password',
            email='user1@user1.com',
            first_name='User',
            last_name='User1',
        ),
demouser2 = User(
            username='user2',
            profile_picture='https://randomuser.me/api/portraits/women/2.jpg',
            password='password',
            email='user2@user2.com',
            first_name='User',
            last_name='User2',
        ),
demouser3 = User(
            username='user3',
            profile_picture='https://randomuser.me/api/portraits/men/3.jpg',
            password='password',
            email='user3@user3.com',
            first_name='User',
            last_name='User3',
        ),
demouser4 = User(
            username='user4',
            profile_picture='https://randomuser.me/api/portraits/women/4.jpg',
            password='password',
            email='user4@user4.com',
            first_name='User',
            last_name='User4',
        ),
demouser5 = User(
            username='user5',
            profile_picture='https://randomuser.me/api/portraits/men/5.jpg',
            password='password',
            email='user5@user5.com',
            first_name='User',
            last_name='User5',
        ),
demouser6 = User(
            username='user6',
            profile_picture='https://randomuser.me/api/portraits/women/6.jpg',
            password='password',
            email='user6@user6.com',
            first_name='User',
            last_name='User6',
        ),
demouser7 = User(
            username='user7',
            profile_picture='https://randomuser.me/api/portraits/men/7.jpg',
            password='password',
            email='user7@user7.com',
            first_name='User',
            last_name='User7',
        ),
demouser8 = User(
            username='user8',
            profile_picture='https://randomuser.me/api/portraits/women/8.jpg',
            password='password',
            email='user8@user8.com',
            first_name='User',
            last_name='User8',
        ),
demouser9 = User(
            username='user9',
            profile_picture='https://randomuser.me/api/portraits/men/9.jpg',
            password='password',
            email='user9@user9.com',
            first_name='User',
            last_name='User9',
        ),
demouser10 = User(
            username='user10',
            profile_picture='https://randomuser.me/api/portraits/women/10.jpg',
            password='password',
            email='user10@user10.com',
            first_name='User',
            last_name='User10',
        ),
demouser11 = User(
            username='user11',
            profile_picture='https://randomuser.me/api/portraits/men/11.jpg',
            password='password',
            email='user11@user11.com',
            first_name='User',
            last_name='User11',
        ),
demouser12 = User(
            username='user12',
            profile_picture='https://randomuser.me/api/portraits/women/12.jpg',
            password='password',
            email='user12@user12.com',
            first_name='User',
            last_name='User12',
        ),
demouser13 = User(
            username='user13',
            profile_picture='https://randomuser.me/api/portraits/men/13.jpg',
            password='password',
            email='user13@user13.com',
            first_name='User',
            last_name='User13',
        ),
demouser14 = User(
            username='user14',
            profile_picture='https://randomuser.me/api/portraits/women/14.jpg',
            password='password',
            email='user14@user14.com',
            first_name='User',
            last_name='User14',
        ),
demouser15 = User(
            username='user15',
            profile_picture='https://randomuser.me/api/portraits/men/15.jpg',
            password='password',
            email='user15@user15.com',
            first_name='User',
            last_name='User15',
        ),
demouser16 = User(
            username='user16',
            profile_picture='https://randomuser.me/api/portraits/women/16.jpg',
            password='password',
            email='user16@user16.com',
            first_name='User',
            last_name='User16',
        ),
demouser17 = User(
            username='user17',
            profile_picture='https://randomuser.me/api/portraits/men/17.jpg',
            password='password',
            email='user17@user17.com',
            first_name='User',
            last_name='User17',
        ),
demouser18 = User(
            username='user18',
            profile_picture='https://randomuser.me/api/portraits/women/18.jpg',
            password='password',
            email='user18@user18.com',
            first_name='User',
            last_name='User18',
        ),
demouser19 = User(
            username='user19',
            profile_picture='https://randomuser.me/api/portraits/men/19.jpg',
            password='password',
            email='user19@user19.com',
            first_name='User',
            last_name='User19',
        ),
demouser20 = User(
            username='user20',
            profile_picture='https://randomuser.me/api/portraits/women/20.jpg',
            password='password',
            email='user20@user20.com',
            first_name='User',
            last_name='User20',
        ),
demouser21 = User(
            username='user21',
            profile_picture='https://randomuser.me/api/portraits/men/21.jpg',
            password='password',
            email='user21@user21.com',
            first_name='User',
            last_name='User21',
        ),
demouser22 = User(
            username='user22',
            profile_picture='https://randomuser.me/api/portraits/women/22.jpg',
            password='password',
            email='user22@user22.com',
            first_name='User',
            last_name='User22',
        ),
demouser23 = User(
            username='user23',
            profile_picture='https://randomuser.me/api/portraits/men/23.jpg',
            password='password',
            email='user23@user23.com',
            first_name='User',
            last_name='User23',
        ),
demouser24 = User(
            username='user24',
            profile_picture='https://randomuser.me/api/portraits/women/24.jpg',
            password='password',
            email='user24@user24.com',
            first_name='User',
            last_name='User24',
        ),
demouser25 = User(
            username='user25',
            profile_picture='https://randomuser.me/api/portraits/men/25.jpg',
            password='password',
            email='user25@user25.com',
            first_name='User',
            last_name='User25',
        ),
demouser26 = User(
            username='user26',
            profile_picture='https://randomuser.me/api/portraits/women/26.jpg',
            password='password',
            email='user26@user26.com',
            first_name='User',
            last_name='User26',
        ),
demouser27 = User(
            username='user27',
            profile_picture='https://randomuser.me/api/portraits/men/27.jpg',
            password='password',
            email='user27@user27.com',
            first_name='User',
            last_name='User27',
        ),
demouser28 = User(
            username='user28',
            profile_picture='https://randomuser.me/api/portraits/women/28.jpg',
            password='password',
            email='user28@user28.com',
            first_name='User',
            last_name='User28',
        ),
demouser29 = User(
            username='user29',
            profile_picture='https://randomuser.me/api/portraits/men/29.jpg',
            password='password',
            email='user29@user29.com',
            first_name='User',
            last_name='User29',
        ),

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
