
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../styles/navbar.css"
import pinkSquidBanner from "./../images/bannerLogo-pinkBlack.png"
import magGlass from "./../images/magGlass.png"
import { login } from '../../src/store/session';


const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const loginDemo = (e) => {
    e.preventDefault();
    const data = dispatch(login("demo@aa.com", "password"));
    history.push("/inks")
  }

  return (
    <nav className='nav-bar'>
        <div className="nav-section nav-items-left">
            <div className="nav-item no-pad">
                <img className='nav-icon' src={pinkSquidBanner} alt="" />
            </div>
        </div>

        <div className="nav-section nav-search-container">
            <div className='nav-search-box'>
                <img className="search-icon" src={magGlass} alt="" />
                <input className='nav-search-input' type="text" placeholder="Search" />
            </div>
        </div>

        <div className="nav-section nav-items-right">
            <div className="nav-item no-pad">
              <a href="/profile-page">About</a>
            </div>
            <div className="nav-item no-pad" onClick={e=>loginDemo(e)}>Demo User</div>
            <div className="nav-item no-pad">
              <a href="/login">log in</a>
            </div>
            <div className="nav-item no-pad">
              <a href="/sign-up">sign up</a>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
