from app.models import db, Ink, Category, User

# Adds a demo user, you can add other users here if you want
def seed_inks():


    ink0 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        title = "Crazy Ink",
        subtitle = "Sick piece! Took a loooooooooong time!",
        destination_link = "google.com",
    )
    ink1 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Best-Tattoos-For-Men.jpg",
        title = "How?",
        subtitle = "Artists are amazing!",
        destination_link = "",
    )
    ink2 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tattoo-Ideas-For-Men.jpg",
        title = "Fresh piece",
        subtitle = "What do you think of my latest work??",
        destination_link = "",
    )
    ink21 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Celtic-Tattoo-Ideas-For-Men.jpg",
        title = "Heritage",
        subtitle = "Got this because my heritage is important. I'm Scottish. Or Irish? I forget...",
        destination_link = ""
        )
    ink3 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Simple-Tattoo-Ideas-For-Men.jpg",
        title = "Simple, clean",
        subtitle = "Find an error on this one. Dare you",
        destination_link = "",
    )
    ink4 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cross-Tattoo-Ideas-For-Men.jpg",
        title = "Cross",
        subtitle = "Nicely done, good shadows.",
        destination_link = "",
    )
    ink5 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo.jpg",
        title = "Dope skull",
        subtitle = "This was by a friend of mine in Orlando",
        destination_link = "",
    )
    ink6 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo-Ideas-For-Men.jpg",
        title = "Wicked SKull",
        subtitle = "I got this tattoo for a friend",
        destination_link = "",
    )
    ink8 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Lion-Tattoo.jpg",
        title = "Roar",
        subtitle = "prison tats ftw",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink9 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Quote-Tattoo-Ideas-For-Men.jpg",
        title = "Quotable",
        subtitle = "Whatever you have to say, someone else has already said it better",
        destination_link = ""
    )
    ink10 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Star-Tattoo-Ideas-For-Men.jpg",
        title = "Reach",
        subtitle = "Shoot for the stars, son",
        destination_link = ""
    )
    ink11 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Owl-Tattoo.jpg",
        title = "Hoot hoot",
        subtitle = "My friend correctly guessed the number of licks it takes to get to the center of a tootsie pop",
        destination_link = ""
    )
    ink12 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Arrow-Tattoo.jpg",
        title = "Which Way?",
        subtitle = "PNW is the best",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink13 = Ink(
        creator_id = 2,
        creator_username='ladyleena',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Name-Tattoo.jpg",
        title = "RIP",
        subtitle = "Pour one out....",
        destination_link = "",
    )
    ink14 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Compass-Tattoo-Ideas-For-Men.jpg",
        title = "North",
        subtitle = "Not all who wander are lost. Most are homeless though",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink15 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Rose-Tattoo.jpg",
        title = "Love",
        subtitle = "Every rose",
        destination_link = "",
           )
    ink16 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tiger-Tattoo.jpg",
        title = "Roar #2",
        subtitle = "Katie Perry > Survivor",
        destination_link = "",
    )
    ink17 = Ink(
        creator_id = 3,
        creator_username='NeverGonnaGive',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Gemini-Tattoo.jpg",
        title = "Stars Align",
        subtitle = "Dude astrology is like, legit. I minored in it ok? I know what Im talking about",
        destination_link = ""
    )
    ink18 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cloud-Tattoo-Ideas-For-Men.jpg",
        title = "Cloudy NW",
        subtitle = "I like turtles",
        destination_link = ""
        )
    ink19 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Scorpio-Tattoo.jpg",
        title = "Scorpio",
        subtitle = "Scorpios are a pain in the ass, bruh. JK, Astrology isnt real lol",
        destination_link = ""
        )
    ink37 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Mother-Daughter-Tattoos.jpg",
        title = "Pre-wedding",
        subtitle = "Best mothers day ever",
        destination_link = ""
        )
    ink20 = Ink(
        creator_id = 4,
        creator_username='AnimalFarmer',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Grim-Reaper-Tattoo-Ideas-For-Men.jpg",
        title = "Death",
        subtitle = "Til death do me and this tattoo part",
        destination_link = ""
        )
    ink7 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Dragon-Tattoo.jpg",
        title = "Big Dragon!",
        subtitle = "Met the artist in a bar. He was rad.",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink22 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Biomechanical-Tattoo.jpg",
        title = "Robots are sick",
        subtitle = "And I am one now",
        destination_link = ""
        )
    ink23 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Music-Tattoo.jpg",
        title = "Music is Life",
        subtitle = "Soon Ill get a real mp3 player in my arm...",
        destination_link = ""
        )
    ink24 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Samurai-Tattoo.jpg",
        title = "Sa-Mu-Rai!",
        subtitle = "Japanese culture is tops. Love the art",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink25 = Ink(
        creator_id = 5,
        creator_username='GameEnder',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/11/King-and-Queen-Tattoo.jpg",
        title = "Aww so sweet",
        subtitle = "Me and my frat buddy got these together",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink26 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Unique-Tattoos-For-Women.jpg",
        title = "Crazy!",
        subtitle = "Woke up in vegas with this one.",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink27 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoos-For-Women.jpg",
        title = "Cute",
        subtitle = "I drew this on my friend in Chicago",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink28 = Ink(
        creator_id = 6,
        creator_username='ChainBreaker',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoo-Ideas-For-Girls.jpg",
        title = "Heartwarming",
        subtitle = "Simple, but effective",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink29 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Simple-Small-Tattoos-For-Women.jpg",
        title = "Tiny tattoo",
        subtitle = "small but mighty",
        destination_link = ""
        )
    ink30 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoos.jpg",
        title = "Meaningful",
        subtitle = "A very special one to me",
        destination_link = ""
        )
    ink31 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoo-Ideas-For-Women.jpg",
        title = "Adorable",
        subtitle = "Not my best work, but I was happy with it.",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink32 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Little-Tattoo-Ideas-For-Women.jpg",
        title = "Tricky line work",
        subtitle = "Crazy how hard this one was",
        destination_link = ""
        )
    ink33 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoos-For-Women.jpg",
        title = "Flowers",
        subtitle = "Who doesnt like flowers?",
        destination_link = ""
        )
    ink34 = Ink(
        creator_id = 7,
        creator_username='Manhattan',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoo-Ideas-For-Women.jpg",
        title = "Scratch-n-sniff",
        subtitle = "Tough one! Took me a while",
        destination_link = ""
        )
    ink35 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Best-Matching-Best-Friend-Tattoos.jpg",
        title = "Best Buds",
        subtitle = "Artist was fantastic. Thanks Joey!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink36 = Ink(
        creator_id = 8,
        creator_username='Shruggers',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Best-Friend-Tattoos.jpg",
        title = "Homies 4 lyfe",
        subtitle = "To my best girl Sabrina!",
        destination_link = ""
        )
    ink38 = Ink(
        creator_id = 1,
        creator_username = 'InkyTheDemo',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Skull-Tattoos-For-Women.jpg",
        title = "Love this one",
        subtitle = "TFavorite piece i have for sure.",
        destination_link = ""
        )
    ink39 = Ink(
        creator_id = 9,
        creator_username='SoItGoes',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Wings-Tattoos.jpg",
        title = "Wings",
        subtitle = "Fly away!",
        destination_link = "",
        )
    ink40 = Ink(
        creator_id = 9,
        creator_username='SoItGoes',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Sun-and-Moon-Tattoo-Ideas-For-Girls.jpg",
        title = "Sun and Moon",
        subtitle = "I loved getting this one in Florida",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )
    ink41 = Ink(
        creator_id = 10,
        creator_username='OhSoWell',
        image = "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Colorful-Tattoo-Ideas-For-Women.jpg",
        title = "Colorful",
        subtitle = "Excellent job!",
        destination_link = "https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767"
    )

    ink1.categories.append(Category.query.get(1))
    ink1.categories.append(Category.query.get(3))
    ink1.categories.append(Category.query.get(5))

    db.session.add(ink20)
    db.session.add(ink4)
    db.session.add(ink6)
    db.session.add(ink7)
    db.session.add(ink1)
    db.session.add(ink3)
    db.session.add(ink2)
    db.session.add(ink0)
    db.session.add(ink12)
    db.session.add(ink13)
    db.session.add(ink14)
    db.session.add(ink9)
    db.session.add(ink10)
    db.session.add(ink19)
    db.session.add(ink8)
    db.session.add(ink27)
    db.session.add(ink5)
    db.session.add(ink17)
    db.session.add(ink22)
    db.session.add(ink24)
    db.session.add(ink11)
    db.session.add(ink16)
    db.session.add(ink15)
    db.session.add(ink26)
    db.session.add(ink28)
    db.session.add(ink29)
    db.session.add(ink18)
    db.session.add(ink25)
    db.session.add(ink31)
    db.session.add(ink30)
    db.session.add(ink21)
    db.session.add(ink41)
    db.session.add(ink40)
    db.session.add(ink23)
    db.session.add(ink33)
    db.session.add(ink39)
    db.session.add(ink36)
    db.session.add(ink38)
    db.session.add(ink37)
    db.session.add(ink34)
    db.session.add(ink35)
    db.session.add(ink32)

    db.session.commit()

    inky_the_demo = User.query.get(1)

    inky_the_demo.saved_inks.append(Ink.query.get(17))
    inky_the_demo.saved_inks.append(Ink.query.get(38))
    inky_the_demo.saved_inks.append(Ink.query.get(26))
    inky_the_demo.saved_inks.append(Ink.query.get(4))
    inky_the_demo.saved_inks.append(Ink.query.get(5))
    inky_the_demo.saved_inks.append(Ink.query.get(6))
    inky_the_demo.saved_inks.append(Ink.query.get(7))
    inky_the_demo.saved_inks.append(Ink.query.get(8))
    inky_the_demo.saved_inks.append(Ink.query.get(12))
    inky_the_demo.saved_inks.append(Ink.query.get(15))

    lady_leena = User.query.get(2)

    lady_leena.saved_inks.append(Ink.query.get(21))
    lady_leena.saved_inks.append(Ink.query.get(13))
    lady_leena.saved_inks.append(Ink.query.get(9))
    lady_leena.saved_inks.append(Ink.query.get(10))

    never_gonna_give = User.query.get(3)

    never_gonna_give.saved_inks.append(Ink.query.get(11))
    never_gonna_give.saved_inks.append(Ink.query.get(18))
    never_gonna_give.saved_inks.append(Ink.query.get(22))
    never_gonna_give.saved_inks.append(Ink.query.get(23))

    animal_farmer = User.query.get(4)

    animal_farmer.saved_inks.append(Ink.query.get(31))
    animal_farmer.saved_inks.append(Ink.query.get(27))
    animal_farmer.saved_inks.append(Ink.query.get(14))
    animal_farmer.saved_inks.append(Ink.query.get(2))

    game_ender = User.query.get(5)

    game_ender.saved_inks.append(Ink.query.get(19))
    game_ender.saved_inks.append(Ink.query.get(20))
    game_ender.saved_inks.append(Ink.query.get(28))
    game_ender.saved_inks.append(Ink.query.get(34))

    chain_breaker = User.query.get(6)

    chain_breaker.saved_inks.append(Ink.query.get(24))
    chain_breaker.saved_inks.append(Ink.query.get(16))
    chain_breaker.saved_inks.append(Ink.query.get(25))
    chain_breaker.saved_inks.append(Ink.query.get(3))

    queenie_v = User.query.get(7)

    queenie_v.saved_inks.append(Ink.query.get(42))
    queenie_v.saved_inks.append(Ink.query.get(40))
    queenie_v.saved_inks.append(Ink.query.get(35))
    queenie_v.saved_inks.append(Ink.query.get(29))
    queenie_v.saved_inks.append(Ink.query.get(30))

    manhattan = User.query.get(8)

    manhattan.saved_inks.append(Ink.query.get(1))
    manhattan.saved_inks.append(Ink.query.get(37))
    manhattan.saved_inks.append(Ink.query.get(41))
    manhattan.saved_inks.append(Ink.query.get(39))

    shruggers = User.query.get(9)

    shruggers.saved_inks.append(Ink.query.get(36))
    shruggers.saved_inks.append(Ink.query.get(33))

    so_it_goes = User.query.get(10)

    so_it_goes.saved_inks.append(Ink.query.get(32))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_inks():
    db.session.execute('TRUNCATE inks RESTART IDENTITY CASCADE;')
    db.session.commit()
