from app.models import db, Ink, Category

# Adds a demo user, you can add other users here if you want
def seed_inks():


    # ink0 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink1 = Ink(
    #     creator_id = 8,
    #     ink_id =
    # )
    # ink2 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink21 = Ink(
    #     creator_id = 4,
    #     ink_id =
    #     )
    # ink3 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink4 = Ink(
    #     creator_id = 6,
    #     ink_id =
    # )
    # ink5 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink6 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink8 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink9 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink10 = Ink(
    #     creator_id = 2,
    #     ink_id =
    # )
    # ink11 = Ink(
    #     creator_id = 2,
    #     ink_id =
    # )
    # ink12 = Ink(
    #     creator_id = 2,
    #     ink_id =
    # )
    # ink13 = Ink(
    #     creator_id = 2,
    #     ink_id =
    # )
    # ink14 = Ink(
    #     creator_id = 3,
    #     ink_id =
    # )
    # ink15 = Ink(
    #     creator_id = 3,
    #     ink_id =
    #        )
    # ink16 = Ink(
    #     creator_id = 3,
    #     ink_id =
    # )
    # ink17 = Ink(
    #     creator_id = 3,
    #     ink_id =
    # )
    # ink18 = Ink(
    #     creator_id = 4,
    #     ink_id =
    #     )
    # ink19 = Ink(
    #     creator_id = 4,
    #     ink_id =
    #     )
    # ink37 = Ink(
    #     creator_id = 8,
    #     ink_id =
    #     )
    # ink20 = Ink(
    #     creator_id = 4,
    #     ink_id =
    #     )
    # ink7 = Ink(
    #     creator_id = 1,
    #     ink_id =
    # )
    # ink22 = Ink(
    #     creator_id = 5,
    #     ink_id =
    #     )
    # ink23 = Ink(
    #     creator_id = 5,
    #     ink_id =
    #     )
    # ink24 = Ink(
    #     creator_id = 5,
    #     ink_id =
    # )
    # ink25 = Ink(
    #     creator_id = 5,
    #     ink_id =
    # )
    # ink26 = Ink(
    #     creator_id = 6,
    #     ink_id =
    # )
    # ink27 = Ink(
    #     creator_id = 6,
    #     ink_id =
    # )
    # ink28 = Ink(
    #     creator_id = 6,
    #     ink_id =
    # )
    # ink29 = Ink(
    #     creator_id = 1,
    #     ink_id =
    #     )
    # ink30 = Ink(
    #     creator_id = 7,
    #     ink_id =
    #     )
    # ink31 = Ink(
    #     creator_id = 7,
    #     ink_id =
    # )
    # ink32 = Ink(
    #     creator_id = 7,
    #     ink_id =
    #     )
    # ink33 = Ink(
    #     creator_id = 7,
    #     ink_id =
    #     )
    # ink34 = Ink(
    #     creator_id = 7,
    #     ink_id =
    #     )
    # ink35 = Ink(
    #     creator_id = 8,
    #     ink_id =
    # )
    # ink36 = Ink(
    #     creator_id = 8,
    #     ink_id =
    #     )
    # ink38 = Ink(
    #     creator_id = 1,
    #     ink_id =
    #     )
    # ink39 = Ink(
    #     creator_id = 9,
    #     ink_id =
    #     )
    # ink40 = Ink(
    #     creator_id = 9,
    #     ink_id =
    # )
    # ink41 = Ink(
    #     creator_id = 10
    #     ink_id =,
    # )

    # db.session.add(ink20)
    # db.session.add(ink4)
    # db.session.add(ink6)
    # db.session.add(ink7)
    # db.session.add(ink1)
    # db.session.add(ink3)
    # db.session.add(ink2)
    # db.session.add(ink0)
    # db.session.add(ink12)
    # db.session.add(ink13)
    # db.session.add(ink14)
    # db.session.add(ink9)
    # db.session.add(ink10)
    # db.session.add(ink19)
    # db.session.add(ink8)
    # db.session.add(ink27)
    # db.session.add(ink5)
    # db.session.add(ink17)
    # db.session.add(ink22)
    # db.session.add(ink24)
    # db.session.add(ink11)
    # db.session.add(ink16)
    # db.session.add(ink15)
    # db.session.add(ink26)
    # db.session.add(ink28)
    # db.session.add(ink29)
    # db.session.add(ink18)
    # db.session.add(ink25)
    # db.session.add(ink31)
    # db.session.add(ink30)
    # db.session.add(ink21)
    # db.session.add(ink41)
    # db.session.add(ink40)
    # db.session.add(ink23)
    # db.session.add(ink33)
    # db.session.add(ink39)
    # db.session.add(ink36)
    # db.session.add(ink38)
    # db.session.add(ink37)
    # db.session.add(ink34)
    # db.session.add(ink35)
    # db.session.add(ink32)



    # db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
# def undo_inks():
#     db.session.execute('TRUNCATE inks RESTART IDENTITY CASCADE;')
#     db.session.commit()
