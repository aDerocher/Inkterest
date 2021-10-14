import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { Route, Link, NavLink, useHistory } from "react-router-dom";
import '../styles/splash-page.css'

function SplashPage() {

    return (
        <div className="splash-container">
            <div className='top-container'>
                <h1>Get your next</h1>
                {/* h1 below is resevered for rolling text */}
                <h1>ROLLING_TEXT</h1>
            </div>
            <div className='bottom-container'>

                <div className='card-1'>

                </div>
                <div className='card-2'>

                </div>
                <div className='card-3'>

                </div>
                <div className='card-4'>

                </div>
                <div className='card-5'>

                </div>
                <div className='card-6'>

                </div>
                <div className='card-7'>

                </div>
            </div>
        </div>
    );
}

export default SplashPage;
