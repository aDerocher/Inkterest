
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
    )
}

// for inks => WIP
for (i=1; i < 10; i++){
    let g = 'men'
    if (i%2 === 0){g = 'women'}

    console.log(
    `ink${i} = Ink\(
        creator_id = ${i},
        image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.inkedmag.com%2F.image%2Ft_share%2FMTU5MDMzMDM4NjQ1ODMxMzE3%2Fmonochrome_feature.jpg&f=1&nofb=1",  
        title = "Demo Tattoo"
        subtitle = "This is a subtitle"
        destination_link = "https://www.ebay.com"
    \),
    ink${i} = Ink\(
        creator_id = ${i},
        image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.inkedmag.com%2F.image%2Ft_share%2FMTU5MDMzMDM4NjQ1ODMxMzE3%2Fmonochrome_feature.jpg&f=1&nofb=1",  
        title = "Demo Tattoo"
        subtitle = "This is a subtitle"
        destination_link = "https://www.ebay.com"
    \),
    ink${i} = Ink\(
        creator_id = ${i},
        image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.inkedmag.com%2F.image%2Ft_share%2FMTU5MDMzMDM4NjQ1ODMxMzE3%2Fmonochrome_feature.jpg&f=1&nofb=1",  
        title = "Demo Tattoo"
        subtitle = "This is a subtitle"
        destination_link = "https://www.ebay.com"
    \),`
    )
}