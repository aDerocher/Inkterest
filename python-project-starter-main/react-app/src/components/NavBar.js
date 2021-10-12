import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Modal from "./Modal";
import pinkSquidLogo from "./../images/squid-circle-icon-Black.png";
import magGlass from "./../images/magGlass.png";
import demoProfImage from "./../images/prof-Img_defaultSquid.png";
import checkmark from "./../images/checkMark-darkGrey.png";
import "../styles/navbar.css";
import "../styles/profileDD.css";
import ProfileModal from "./ProfileModal";
import Profile_page from "./Profile-page";

const NavBar = () => {
  // const [show, setShow] = useState(false)
  const [show, setShow] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const showDropDown = () => {
    // equasion to show dropdown?
    // or use modal?
  };

  const toProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-section nav-items-left">
          <div className="nav-item no-pad">
            <img className="nav-icon" src={pinkSquidLogo} alt="" />
          </div>
          <div className="nav-item">
            <a href="/">Home</a>
          </div>
          <div className="nav-item">Today</div>
        </div>

        <div className="nav-section nav-search-container">
          <div className="nav-search-box">
            <img className="search-icon" src={magGlass} alt="" />
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search"
            />
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
            {/* <button onClick={() => setShow(true) }>Log In</button>
              <Modal onClose={() => setShow(false)} show={show} /> */}
          </div>
          <div className="nav-item no-pad">
            <button onClick={() => setShow(true)}>V</button>
            <ProfileModal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </nav>

      <div></div>
    </>
  );
};

export default NavBar;
