import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllInks } from '../store/ink'
// need to write this backend request to add in usernames to the ink cards
    // import { listAllUsers } from '../store/users'
import "../styles/discover-inks-two.css";

function DiscoverInksTwo() {
    const dispatch = useDispatch();
    let count = 0;
    // direct access to session user/slice of state
    // const sessionUser = useSelector(state => state.session.user);

    // direct access to inks array/slice of state
    const inks = useSelector(state => state.inks)

    // put all the inks into the state
    // TODO:
    // see if you can filter these by users interest/categorical relationship
    useEffect(() => {
        dispatch(listAllInks())
    }, [dispatch])

    const doSomething = () => {
        if (count === 2){
            count = 0;
            return
        }
        count += 1
        return
    }

  return (
    <div className="discover-inks-container">

        {inks?.map((i) => (
            <div className={`c-${count}`} key={i.id}>
                <p>div type: c-{count}</p>
                {doSomething()}
            </div>
        ))}
    </div>
  );
}

export default DiscoverInksTwo;
