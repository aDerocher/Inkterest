
const randInRange = (s, e) => {
    let range = e - s + 1;
    let num = Math.floor(Math.random()*range)+1;
    return num
};

// ===== will generate users for seed data =====
// will alternate profile pic as man/woman on even/odd numbers
// there's only 100 valid urls for men/women, this will make 50 of each.
for (i=1; i < 30; i++){
    let g = 'men'
    if (i%2 === 0){g = 'women'}

    console.log(
        `demouser${i} = User\(
            username='user${i}',
            profile_picture='https://randomuser.me/api/portraits/${g}/${i}.jpg',
            password='password',
            email='user${i}@user${i}.com',
            first_name='User',
            last_name='User${i}',
        \),`
    );
};


// ===== for inks  =====
for (i=1; i < 30; i++){
    // get a random user id x3
    let randUserId1 = randInRange(1,30)
    let randUserId2 = randInRange(1,30)
    let randUserId3 = randInRange(1,30)

    // get three random numbers to set category tags
    let x = randInRange(1,10);
    let y = randInRange(1,10);
    let z = randInRange(1,10);
    // if any match, re-roll until they're all different
    while (y === x || (z === y || x === z)){
        x = randInRange(1,10);
        y = randInRange(1,10);
        z = randInRange(1,10);
    }

    console.log(
        `demo_ink_${i}_${i+1} = Ink\(
            creator=${randUserId1},
            image='user${i}',
            Title ='My First Tattoo!',
            subtitle='This was my first tattoo. Big thanks to the artists at Miami Ink for making it such a memorable experience!',
            destination_link='',
            category_1=${z},
            category_2=${y},
            category_3=${x},
        \),
        demo_ink_${i}_${i+2} = Ink\(
            creator=${randUserId2},
            image='user${i}',
            Title ='Excellent Tatoo',
            subtitle='Fantastic work by the artists at Super Awesome Tattoo. Very good attention to detail',
            destination_link='',
            category_1=${x},
            category_2=${y},
            category_3=,
        \),
        demo_ink_${i}_${i+3} = Ink\(
            creator=${randUserId3},
            image='user${i}',
            Title ='Latest Creation',
            subtitle='This was my latest work. I practiced a lot on pig ears to get the shading just right.',
            destination_link='',
            category_1=${z},
            category_2=,
            category_3=,
        \),`
    );
};


// ===== for canvases  =====
for (i=1; i < 30; i+3){
    // get a random user id x3
    let randUserId1 = randInRange(1,30)
    let randUserId2 = randInRange(1,30)
    let randUserId3 = randInRange(1,30)

    console.log(
        `demo_board${i} = Ink\(
            creator=${randUserId1},
            name='Tattoos I Like',
        \),
        demo_board${i+1} = Ink\(
            creator=${randUserId2},
            name='Cool Board',
        \),
        demo_board${i+2} = Ink\(
            creator=${randUserId3},
            name='Tattoo Board',
        \),`
    );
};
