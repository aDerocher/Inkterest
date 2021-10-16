from app.models import db, User, follows


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='InkyTheDemo',
        profile_picture='https://cdn.vox-cdn.com/thumbor/NL-dc-W2pxS0QrdqLuaKvenpz74=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13604742/squid.png',
        email='demo@aa.com',
        first_name='Aldous',
        last_name='Inksley',
        password='password',
        )
    user1 = User(
        username='ladyleena',
        profile_picture='https://randomuser.me/api/portraits/women/2.jpg',
        email='leena@aa.com',
        first_name='Leena',
        last_name='Randomowitz',
        password='password',
        )
    user2 = User(
        username='NeverGonnaGive',
        profile_picture='https://randomuser.me/api/portraits/men/2.jpg',
        email='rick@aa.com',
        first_name='Rick',
        last_name='Rolls',
        password='password',
    )
    user3 = User(
        username='AnimalFarmer',
        profile_picture='https://randomuser.me/api/portraits/men/3.jpg',
        email='g@orwell.com',
        first_name='George',
        last_name='Orwell',
        password='password',
    )
    user4 = User(
        username='GameEnder',
        profile_picture='https://randomuser.me/api/portraits/men/4.jpg',
        email='formick@dragonteam.com',
        first_name='Orson',
        last_name='Scott-Card',
        password='password',
    )
    user5 = User(
        username='ChainBreaker',
        profile_picture='https://randomuser.me/api/portraits/women/3.jpg',
        email='queen@dragon.com',
        first_name='Danarys',
        last_name='Targarian',
        password='password',
    )
    user6 = User(
        username='queenie-v',
        profile_picture='https://randomuser.me/api/portraits/women/4.jpg',
        email='whatsemail@oldschool.com',
        first_name='Queen',
        last_name='Victoria',
        password='password',
    )
    user7 = User(
        username='Manhattan',
        profile_picture='https://randomuser.me/api/portraits/men/5.jpg',
        email='alan@moore.com',
        first_name='Allan',
        last_name='Moore',
        password='password',
    )
    user8 = User(
        username='Shruggers',
        profile_picture='https://randomuser.me/api/portraits/women/5.jpg',
        email='aynny@atlasfoundation.com',
        first_name='Ayn',
        last_name='Rand',
        password='password',
    )
    user9 = User(
        username='SoItGoes',
        profile_picture='https://randomuser.me/api/portraits/men/6.jpg',
        email='kurt@vonnegut.com',
        first_name='Kurt',
        last_name='Vonnegut',
        password='password',
    )
    user10 = User(
        username='OhSoWell',
        profile_picture='https://randomuser.me/api/portraits/men/7.jpg',
        email='thomas@sowell.com',
        first_name='Thomas',
        last_name='Sowell',
        password='password',
    )


    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)

    demo.followers.append(User.query.get(2))
    demo.followers.append(User.query.get(3))
    demo.followers.append(User.query.get(4))
    # account for user being unable to follow himself!
    # demo.followers.append(User.query.get(1))
    user1.followers.append(User.query.get(3))
    user2.followers.append(User.query.get(1))
    user3.followers.append(User.query.get(8))
    user4.followers.append(User.query.get(7))
    user5.followers.append(User.query.get(9))
    user6.followers.append(User.query.get(1))
    user7.followers.append(User.query.get(3))
    user8.followers.append(User.query.get(1))

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
