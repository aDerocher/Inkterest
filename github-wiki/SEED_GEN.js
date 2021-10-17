
// ===== will generate users for seed data =====
// will alternate profile pic as man/woman on even/odd numbers
// there's only 100 valid urls for men/women, this will make 50 of each.
// for (i=1; i < 30; i++){
//     let g = 'men'
//     if (i%2 === 0){g = 'women'}

//     console.log(
//         `demouser${i} = User\(
//             username='user${i}',
//             profile_picture='https://randomuser.me/api/portraits/${g}/${i}.jpg',
//             password='password',
//             email='user${i}@user${i}.com',
//             first_name='User',
//             last_name='User${i}',
//         \),`
//     )
// }


inkPictures = [
    // m
    "https://cdn.tattoosboygirl.com/wp-content/uploads/2017/06/best-tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Best-Tattoos-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Simple-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cross-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Skull-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Dragon-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Lion-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Quote-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Star-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Owl-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Arrow-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Name-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Compass-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Rose-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Tiger-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Gemini-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Cloud-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Scorpio-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Grim-Reaper-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Celtic-Tattoo-Ideas-For-Men.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Biomechanical-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Music-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/Samurai-Tattoo.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/11/King-and-Queen-Tattoo.jpg",
    // w
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Unique-Tattoos-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoos-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Simple-Tattoo-Ideas-For-Girls.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Simple-Small-Tattoos-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Meaningful-Tattoo-Ideas-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Cute-Little-Tattoo-Ideas-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoos-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Flower-Tattoo-Ideas-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Best-Matching-Best-Friend-Tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Best-Friend-Tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Matching-Mother-Daughter-Tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Skull-Tattoos-For-Women.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Wings-Tattoos.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Sun-and-Moon-Tattoo-Ideas-For-Girls.jpg",
    "https://www.toptrendsguide.com/wp-content/uploads/2019/10/Colorful-Tattoo-Ideas-For-Women.jpg",
]


// for inks => WIP
for (i=0; i < inkPictures.length; i++){
    let dlink="https://www.google.com/search?q=tattoos&tbm=isch&ved=2ahUKEwjc96Ky2s_zAhU8ATQIHY_pD4sQ2-cCegQIABAA&oq=tattoos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEM6BQgAEIAEUJHPKVi91ylgsdkpaABwAHgAgAHEA4gB0gySAQk0LjEuMC4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cy1rYZzyIryC0PEPj9O_2Ag&bih=716&biw=767";
    if (i%3 === 0){
        dlink = ""
    }
    console.log(
        `ink${i} = Ink\(
            creator_id = ${inkPictures%9},
            creator_username='leena',
            image = "${inkPictures[i]}", 
            title = "Ink Title",
            subtitle = "This was a cool tattoo!",
            destination_link = ${dlink}
        )`
    );
};

for (i=0; i < 41; i++){
    console.log(`db.session.add(ink${i})`)
}