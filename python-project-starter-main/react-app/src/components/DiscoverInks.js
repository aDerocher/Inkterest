import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllInks } from '../store/ink'
// need to write this backend request to add in usernames to the ink cards
// import { listAllUsers } from '../store/users'
import imgPlaceholder from "./../images/squid-circle-icon-Black.png"
import "../styles/discover-inks.css";

function DiscoverInks() {
    const dispatch = useDispatch();

    const inks = useSelector(state => state.inks)


    useEffect(() => {
        dispatch(listAllInks())
    }, [dispatch])


  return (
    <div className="discover-inks-container">
        {inks?.map((i) => (

            <div key={i.id} className='tile-container'>
                <div className="image-container" style={{
                            backgroundImage: `url(${i.image})`,
                            height: `100%`
                            }}>
                    <a href={`/inks/${i.id}`}>link</a>
                    <div className="ink-tile-top-buttons">
                        <button className='ink-tile-btn ink-save-btn'>Save</button>
                    </div>

                    <img className='ink-tile-image' src={i.image} alt="" />
                    
                    <div className="ink-tile-bottom-buttons">
                        <button className='ink-tile-btn ink-dest-link-btn'>etsyisthegreatest.com</button>
                        <div className='ink-tile-bottom-buttons-right'>
                            <button className='ink-tile-btn ink-tile-btn-s'>&#8683;</button>
                            <button className='ink-tile-btn ink-tile-btn-s'>...</button>
                        </div>
                    </div>
                </div>
                <div className="tile-footer">
                    <img className='user-image' src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />
                    <p className="username"><a href={`/users/${i.creator_id}`}>{i.creator_username}</a></p>
                </div>
            </div>

        ))}
    </div>
  );
}

export default DiscoverInks;
