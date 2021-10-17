# Welcome to Inkterest!

Live site: [Inkterest](https://inkterest.herokuapp.com/)

Inkterest is a clone of Pinterest, designed to be an image sharing and social media service to allow for the sharing & discovery of tattoo images, and on a smaller scale, GIFs from all over the world.

## App Preview

#### Splash page

![]()

#### Discover feed

![]()

## Features

 - Create, edit, and delete Inks
 - Create, edit, and delete Canvases
 - Add inks to canvases to organize collection
 - Privitize your canvas
 - Edit personal user information
 - Follow other users to build community

## Languages used

 - JavaScript
 - Python

## Technologies used

 - React
 - React dropdown
 - Redux
 - Flask
 - SQLalchemy
 - postgreSQL
 - Docker
 - Heroku

Technical Details

The session user can visit a specific inks page, and follow the user associated with that ink.

This feature is heavily governed by strict nested conditional rendering which first checks if the `sessionUser`
is logged in. The next check is to confirm is the `sessionUser` is **NOT** owner of the ink in question. If
the `sessionUser` is the owner, the follow and unfollow buttons will not render. If the `sessionUser` is not the
owner, the third and final check is set up as a ternary to check if the `sessionUser` is already following the `user`.

```
return (
    {
    sessionUser &&
    sessionUser?.id !== user?.id &&
        (
        isFollowing
        ? <button className='unfollow-btn' onClick={(e) => handleUnFollow(e, user?.id)}>Unfollow</button>
        : <button className='follow-btn' onClick={(e) => handleFollow(e, user?.id}>Follow</button>
        )
    }
)
```

We employ this final check by updating React state `isFollowing` on initial render and every subsequent button click.
This ensures that the follow and unfollow button will render in accord with the relationship between the `sessionUser`
and `user`.




## Future Features to implement

    - Comments
    - Likes/Dislikes
    - Saving inks to profile page
    - Adding multiple inks to a canvas at once
