
// will generate users for seed data
// will alternate profile pic as man/woman on even/odd numbers
// there's only 100 valid urls for men/women, this will make 50 of each.

for (i=1; i < 10; i++){
    let g = 'men'
    if (i%2 === 0){g = 'women'}

    console.log(
        `\(
        'user${i}', 
        'https://randomuser.me/api/portraits/${g}/13.jpg', 
        'user${i}@user${i}.com', 
        'User', 
        'User${i}', 
        'password',
        \)\,`
    )
}