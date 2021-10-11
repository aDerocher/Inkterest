
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Modal from './Modal';
import pinkSquidLogo from "./../images/squid-circle-icon-Black.png"
import magGlass from "./../images/magGlass.png"
import demoProfImage from "./../images/prof-Img_defaultSquid.png"
import checkmark from "./../images/checkMark-darkGrey.png"
import "../styles/navbar.css"
import "../styles/profileDD.css"

const NavBar = () => {
  const [show, setShow] = useState(false)

  const showDropDown = () => {
      
  }

  return (
    <>
    <nav className='nav-bar'>
        <div className="nav-section nav-items-left">
            <div className="nav-item no-pad">
                <img className='nav-icon' src={pinkSquidLogo} alt="" />
            </div>
            <div className="nav-item">
              <a href="/">Home</a>
            </div>
            <div className="nav-item">Today</div>
        </div>

        <div className="nav-section nav-search-container">
            <div className='nav-search-box'>
                <img className="search-icon" src={magGlass} alt="" />
                <input className='nav-search-input' type="text" placeholder="Search" />
            </div>
        </div>

        <div className="nav-section nav-items-right">
            <div className="nav-item no-pad">
              <a href="/">Demo User</a>
            </div>
            <div className="nav-item no-pad">
              <a href="/profile-page">business</a>
            </div>
            <div className="nav-item no-pad">
              {/* <a onClick={() => setShow(show) } href="/login">Log in</a> */}
              <button onClick={() => setShow(true) }>Log In</button>
              <Modal onClose={() => setShow(false)} show={show} />
            </div>
            <div className="nav-item no-pad">
              <a href="/sign-up">sign up</a>
            </div>
        </div>
    </nav>

    <div className='profile-dd-container'>
        <div className="prof-dd-row prof-dd-title">Currently an</div>

        <div className="prof-dd-card pd-hov">
            <img className='prof-dd-uimg' src={demoProfImage} alt="" />
            <div className="prof-dd-card-content">
                <p className='pd-text pd-name'>Aldous H</p>
                <p className='pd-text pd-acctype'>Personal</p>
                <p className='pd-text pd-email'>ahuxley@bnw.com</p>
            </div>
            <img className="pd-checkmark" src={checkmark} alt="" />
        </div>
        <br />
        <div className="prof-dd-row prof-dd-title">Your accounts</div>
        <div className="prof-dd-row pd-hov"><a href="#">Add account</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">Convert to business</a></div>
        <br />
        <div className="prof-dd-row prof-dd-title">More options</div>
        <div className="prof-dd-row pd-hov"><a href="#">Settings</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">Tune your home feed</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">Install the Windows app</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">Get help</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">See terms and privacy</a></div>
        <div className="prof-dd-row pd-hov"><a href="#">Log out</a></div>
    </div>

    </>
  );
}

export default NavBar;
