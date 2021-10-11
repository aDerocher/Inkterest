
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../styles/navbar.css"

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className="nav-section nav-items-left">
            <div className="nav-item no-pad">
                <img className='nav-icon' src="./../../logos-wip/squid-circle-icon-Black.png" alt="" />
            </div>
            <div className="nav-item">Home</div>
            <div className="nav-item">Today</div>
        </div>

        <div className="nav-section nav-search-container">
            <div className='nav-search-box'>
                <img className="search-icon" src="./../../logos-wip/magGlass.png" alt="" />
                <input className='nav-search-input' type="text" placeholder="Search" />
            </div>
        </div>

        <div className="nav-section nav-items-right">
            <div className="nav-item no-pad">Be</div>
            <div className="nav-item no-pad">Bu</div>
            <div className="nav-item no-pad">A</div>
            <div className="nav-item no-pad">V</div>
        </div>
    </nav>
  );
}

export default NavBar;
