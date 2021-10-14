import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { Route, Link, NavLink, useHistory } from "react-router-dom";
import "../styles/about.css";
import squidProfile from "./../images/squid-circle-icon-Black.png"

function About() {

    const options = ["hi"]
    const go = (e) => {
        e.preventDefault()
        window.location.replace("google.com")
    }

  return (
    <div className="about-container">
            <div className="about-header">
                <div className="about-image-container">
                    <img className="about-image" src={squidProfile} alt="" />
                </div>
                <div className="profile-name">
                <h1>Alwyn Grant</h1>
                </div>
                <div className="profile-contact">marzgrant@gmail.com</div>
                <div className='link-buttons-container'>
                    <a target="_blank" href="https://github.com/AlwynGrant">
                        <button className="link-btn git-link" onclick="window.location.href='https://github.com/AlwynGrant';"></button>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com">
                        <button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/andrew-derocher-54003789/';">in</button>
                    </a>
                </div>
            </div>

            <div className="about-header">
                <div className="about-image-container">
                    <img className="about-image" src={squidProfile} alt="" />
                </div>
                <div className="profile-name">
                <h1>Andrew Derocher</h1>
                </div>
                <div className="profile-contact">andrew@andrewderocher.com</div>
                <div className='link-buttons-container'>
                    <a target="_blank" href="https://github.com/aDerocher">
                        <button className="link-btn git-link" onClick="window.location.href='https://github.com/aDerocher';"></button>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/andrew-derocher-54003789/">
                        <button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/andrew-derocher-54003789/';">in</button>
                    </a>
                    {/* <a target="_blank" href="https://www.linkedin.com/in/andrew-derocher-54003789/"><button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/andrew-derocher-54003789/';">in</button> */}
                </div>
            </div>

            <div className="about-header">
                <div className="about-image-container">
                    <img className="about-image" src={squidProfile} alt="" />
                </div>
                <div className="profile-name">
                <h1>Grant Chiu</h1>
                </div>
                <div className="profile-contact">email@email.com</div>
                <div className='link-buttons-container'>
                    <a target="_blank" href="https://github.com/grantc00">
                        <button className="link-btn git-link" onClick="window.location.href='https://github.com/grantc00';"></button>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/grant-chiu-964766206/">
                        <button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/grant-chiu-964766206/';">in</button>
                    </a>
                </div>
            </div>
    </div>

  );
}

export default About;
