
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../styles/navbar.css"
import pinkSquidBanner from "./../images/bannerLogo-pinkBlack.png"
import { login } from '../store/session';
import Modal from './Modal';


const NavBarSplash = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory()

  const loginDemo = (e) => {
    e.preventDefault();
    const data = dispatch(login("demo@aa.com", "password"));
    console.log(data)
    history.push("/inks")
  }

  return (
    <nav className='nav-bar'>
        <div className="nav-section nav-items-left">
            <div className="nav-item no-pad">
                <img className='nav-banner' src={pinkSquidBanner} alt="" />
            </div>
        </div>

        <div className="nav-section nav-search-container">
            {/* <div className='nav-search-box'>
                <img className="search-icon" src={magGlass} alt="" />
                <input className='nav-search-input' type="text" placeholder="Search" />
            </div> */}
        </div>

        <div className="nav-section nav-items-right">
            <div className="nav-item no-pad">
              <a href="/profile-page">About</a>
            </div>
            <div className="nav-item nav-splash-item no-pad" onClick={e=>loginDemo(e)}>Demo User</div>
            <div className="nav-item nav-splash-item no-pad">
              <button onClick={() => setShow(true) }>Log In</button>
              <Modal onClose={() => setShow(false)} show={show} />
            </div>
            <div className="nav-item nav-splash-item no-pad">
              <a href="/sign-up">sign up</a>
            </div>
        </div>
    </nav>
  );
}

export default NavBarSplash;
