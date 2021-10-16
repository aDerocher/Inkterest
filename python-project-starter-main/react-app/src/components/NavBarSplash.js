
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../styles/navbar.css"
import pinkSquidBanner from "./../images/bannerLogo-pinkBlack.png"
import { login } from '../store/session';
import LoginFormModal from './auth/LoginForm'
import SignUpFormModal from './auth/SignUpForm';

const NavBarSplash = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [show, setShow] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const loginDemo = (e) => {
    e.preventDefault();
    const data = dispatch(login("demo@aa.com", "password"));
    console.log(data)
    history.push("/inks")
  }

  const goAbout = (e) => {
      loginDemo(e);
      history.push("/inks"); // ??
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setShowLoginModal(true)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setShowSignUpModal(true)
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
              <button onClick={e => goAbout(e)}>About</button>
            </div>
            <div className="nav-item nav-splash-item no-pad" onClick={e=>loginDemo(e)}>Demo User</div>
            <div className="nav-item nav-splash-item no-pad">
              <div onClick={(e) => handleLogin(e)}>Log In</div>
            </div>
            <div className="nav-item nav-splash-item no-pad">
              <div onClick={(e) => handleSignup(e)}>Sign up</div>
            </div>
        </div>
      {
        showLoginModal && (
          <LoginFormModal
            show={showLoginModal}
            onClose={() => setShowLoginModal(false)}
          />
        )
      }
      {
        showSignUpModal && (
          <SignUpFormModal
            show={showSignUpModal}
            onClose={() => setShowSignUpModal(false)}
          />
        )
      }
    </nav>
  );
}

export default NavBarSplash;
