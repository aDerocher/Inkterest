import React from "react";
// import Dropdown from "react-dropdown";
// import { Route, Link, NavLink, useHistory } from "react-router-dom";
import '../styles/splash-page.css'

function SplashPage() {

    return (
        <div className="splash-container">
            <div className='top-container'>
                <div className='splash-text-1'>Get your next</div>
                {/* div below is resevered for rolling text */}
                <div className='splash-text-2'>ROLLING_TEXT ROLLING_TEXT</div>
            </div>
            <div className='bottom-container'>

                <div className='card-1'>
                    <div className='crust-layer'></div>
                    <div className='crust-layer'></div>
                </div>
                <div className='card-2'>
                    <div className='mantle-layer'></div>
                    <div className='mantle-layer'></div>
                </div>
                <div className='card-3'>
                    <div className='outer-core-layer'></div>
                </div>
                <div className='card-4'>
                    <div className='inner-core-layer'></div>
                </div>
                <div className='card-5'>
                    <div className='outer-core-layer'></div>
                </div>
                <div className='card-6'>
                    <div className='mantle-layer'></div>
                    <div className='mantle-layer'></div>
                </div>
                <div className='card-7'>
                    <div className='crust-layer'></div>
                    <div className='crust-layer'></div>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
