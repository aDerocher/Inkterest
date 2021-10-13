import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
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
                <div className="profile-contact">am.derocher@gmail.com</div>
                <div className='link-buttons-container'>

                    {/* I cant figure out how to link these externally */}

                    <a target="_blank" href="google.com"><button className="link-btn git-link" onclick="window.location.href='https://github.com/AlwynGrant';"></button></a>
                    {/* <button className="link-btn linkedin-link" onClick="window.location.href='linkedIn.com';">in</button> */}
                    <button className="link-btn linkedin-link" onClick={e => go(e)}>in</button>
                </div>
            </div>

            <div className="about-header">
                <div className="about-image-container">
                    <img className="about-image" src={squidProfile} alt="" />
                </div>
                <div className="profile-name">
                <h1>Andrew Derocher</h1>
                </div>
                <div className="profile-contact">am.derocher@gmail.com</div>
                <div className='link-buttons-container'>
                    <button className="link-btn git-link" onClick="window.location.href='https://github.com/aDerocher';"></button>
                    <button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/andrew-derocher-54003789/';">in</button>
                </div>
            </div>

            <div className="about-header">
                <div className="about-image-container">
                    <img className="about-image" src={squidProfile} alt="" />
                </div>
                <div className="profile-name">
                <h1>Grant Chiu</h1>
                </div>
                <div className="profile-contact">am.derocher@gmail.com</div>
                <div className='link-buttons-container'>
                    <button className="link-btn git-link" onClick="window.location.href='https://github.com/grantc00';"></button>
                    <button className="link-btn linkedin-link" onClick="window.location.href='https://www.linkedin.com/in/grant-chiu-964766206/';">in</button>
                </div>
            </div>
    </div>
    
  );
}

export default About;
