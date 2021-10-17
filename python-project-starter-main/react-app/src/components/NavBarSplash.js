
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

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const loginDemo = (e) => {
    e.preventDefault();
    const data = dispatch(login("demo@aa.com", "password"));
    console.log(data)
    history.push("/inks")
  }

  const goAbout = (e) => {
      history.push("/about");
  }

  const goHome = (e) => {
      history.push('/')
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
            <div className="nav-item no-pad spl-home-btn" onClick={(e) => goHome(e)}>
                <img className='nav-banner' src={pinkSquidBanner} alt="" />
            </div>
        </div>

        <div className="nav-section nav-search-container">

        </div>

        <div className="nav-section nav-items-right">
            <div  className='spl-about-btn' onClick={e => goAbout(e)}>About</div>
            <div className="spl-demo-btn" onClick={e=>loginDemo(e)}>Demo</div>
            <div className="spl-login-btn" onClick={(e) => handleLogin(e)}>Log In</div>
            <div className="spl-signup-btn" onClick={(e) => handleSignup(e)}>Sign up</div>
        </div>
      {
        showLoginModal && (
          <LoginFormModal
            show={showLoginModal}
            login={setShowLoginModal}
            signup={setShowSignUpModal}
            onClose={() => setShowLoginModal(false)}
          />
        )
      }
      {
        showSignUpModal && (
          <SignUpFormModal
            show={showSignUpModal}
            login={setShowLoginModal}
            signup={setShowSignUpModal}
            onClose={() => setShowSignUpModal(false)}
          />
        )
      }
    </nav>
  );
}

export default NavBarSplash;
