
// will generate users for seed data
// will alternate profile pic as man/woman on even/odd numbers
// there's only 100 valid urls for men/women, this will make 50 of each.
for (i=1; i < 10; i++){
    let g = 'men'
    if (i%2 === 0){g = 'women'}

    console.log(
        `demo = User\(
            username='user${i}',
            profile_picture='https://randomuser.me/api/portraits/${g}/${i}.jpg',
            password='password',
            email='user${i}@user${i}.com',
            first_name='User',
            last_name='User${i}',
        \),`
    )
}

// for followers => WIP
for (i=1; i < 10; i++){
    let g = 'men'
    if (i%2 === 0){g = 'women'}

    // console.log(
    //     `demo = User\(
    //         username='user${i}',
    //         profile_picture='https://randomuser.me/api/portraits/${g}/${i}.jpg',
    //         password='password',
    //         email='user${i}@user${i}.com',
    //         first_name='User',
    //         last_name='User${i}',
    //     \),`
    // )
}