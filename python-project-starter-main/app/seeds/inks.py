from app.models import db, Ink, Category

# Adds a demo user, you can add other users here if you want
def seed_inks():


    ink0 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        title = "Demo Ink Title",
        subtitle = "This is my first tattoo!",
        destination_link = "google.com",
    )
    ink1 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Best-Tattoos-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink2 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink3 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Simple-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink4 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cross-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink5 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink6 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink7 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Dragon-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink8 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Lion-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink9 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Quote-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
    )
    ink10 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Star-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
    )
    ink11 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Owl-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
    )
    ink12 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Arrow-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink13 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Name-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink14 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Compass-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink15 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Rose-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
           )
    ink16 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tiger-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
    )
    ink17 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Gemini-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
    )
    ink18 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cloud-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink19 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Scorpio-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink20 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Grim-Reaper-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink21 = Ink(
            creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Celtic-Tattoo-Ideas-For-Men.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink22 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Biomechanical-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink23 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Music-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink24 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Samurai-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink25 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/King-and-Queen-Tattoo.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink26 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Unique-Tattoos-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink27 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoos-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink28 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoo-Ideas-For-Girls.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink29 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Simple-Small-Tattoos-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink30 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoos.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink31 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoo-Ideas-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink32 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Little-Tattoo-Ideas-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink33 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoos-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink34 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoo-Ideas-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink35 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Best-Matching-Best-Friend-Tattoos.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink36 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Best-Friend-Tattoos.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink37 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Mother-Daughter-Tattoos.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink38 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Skull-Tattoos-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = ""
        )
    ink39 = Ink(
        creator_id = 9,
        creator_username='SoItGoes',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Wings-Tattoos.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "",
        )
    ink40 = Ink(
        creator_id = 9,
        creator_username='SoItGoes',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Sun-and-Moon-Tattoo-Ideas-For-Girls.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink41 = Ink(
        creator_id = 10,
        creator_username='OhSoWell',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Colorful-Tattoo-Ideas-For-Women.jpg",
        title = "Ink Title",
        subtitle = "This was a cool tattoo!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )

    ink1.categories.append(Category.query.get(1))
    ink1.categories.append(Category.query.get(3))
    ink1.categories.append(Category.query.get(5))

    db.session.add(ink0)
    db.session.add(ink1)
    db.session.add(ink2)
    db.session.add(ink3)
    db.session.add(ink4)
    db.session.add(ink5)
    db.session.add(ink6)
    db.session.add(ink7)
    db.session.add(ink8)
    db.session.add(ink9)
    db.session.add(ink10)
    db.session.add(ink11)
    db.session.add(ink12)
    db.session.add(ink13)
    db.session.add(ink14)
    db.session.add(ink15)
    db.session.add(ink16)
    db.session.add(ink17)
    db.session.add(ink18)
    db.session.add(ink19)
    db.session.add(ink20)
    db.session.add(ink21)
    db.session.add(ink22)
    db.session.add(ink23)
    db.session.add(ink24)
    db.session.add(ink25)
    db.session.add(ink26)
    db.session.add(ink27)
    db.session.add(ink28)
    db.session.add(ink29)
    db.session.add(ink30)
    db.session.add(ink31)
    db.session.add(ink32)
    db.session.add(ink33)
    db.session.add(ink34)
    db.session.add(ink35)
    db.session.add(ink36)
    db.session.add(ink37)
    db.session.add(ink38)
    db.session.add(ink39)
    db.session.add(ink40)
    db.session.add(ink41)



    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_inks():
    db.session.execute('TRUNCATE inks RESTART IDENTITY CASCADE;')
    db.session.commit()
