
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../styles/navbar.css"
import Modal from './Modal';

const NavBar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className='nav-bar'>
        <div className="nav-section nav-items-left">
            <div className="nav-item no-pad">
                <img className='nav-icon' src="./../../logos-wip/squid-circle-icon-Black.png" alt="" />
            </div>
            <div className="nav-item">
              <a href="/">Home</a>
            </div>
            <div className="nav-item">Today</div>
        </div>

        <div className="nav-section nav-search-container">
            <div className='nav-search-box'>
                <img className="search-icon" src="./../../logos-wip/magGlass.png" alt="" />
                <input className='nav-search-input' type="text" placeholder="Search" />
            </div>
        </div>

        <div className="nav-section nav-items-right">
            <div className="nav-item no-pad">
              <a href="/">about</a>
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
  );
}

export default NavBar;
