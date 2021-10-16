import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import illustrative from '../images/Splash-tats/illustrative/illustrative.js';
import americanTraditional from '../images/Splash-tats/american_traditional/amertrad.js';
import japaneseTraditional from '../images/Splash-tats/japanese_traditional/japantrad.js';
import waterColor from '../images/Splash-tats/water_color/water.js';
import '../styles/splash-page.css'

function SplashPage() {
    const arrayWords = [
         "American Traditional idea",
         "Japanese Traditional idea",
         "Water Color idea",
         "Illistrative idea"
     ]
    const array1 = []
    const array2 = []
    const array3 = []
    const array4 = []
    const array5 = []
    const array6 = []
    const array7 = []
    const array8 = []
    const array9 = []
    const array10 = []
    const array11 = []


    return (
        <div className="splash-container">
            <div className='top-container'>
                <div className='splash-text-1'>Get your next</div>
                {/* div below is resevered for rolling text */}
                <div className='splash-text-2'>ROLLING_TEXT ROLLING_TEXT</div>
            </div>
            <div className='bottom-container'>

                <div className='card-1'>
                    <div className='crust-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                    <div className='crust-layer'></div>
                </div>
                <div className='card-2'>
                    <div className='mantle-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                    <div className='mantle-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
                <div className='card-3'>
                    <div className='outer-core-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
                <div className='card-4'>
                    <div className='inner-core-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
                <div className='card-5'>
                    <div className='outer-core-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
                <div className='card-6'>
                    <div className='mantle-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                    <div className='mantle-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
                <div className='card-7'>
                    <div className='crust-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                    <div className='crust-layer'>
                        {/* IMG ARRAY HERE */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
