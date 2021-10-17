import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, Redirect, useParams } from 'react-router-dom';
import illustrative from '../images/Splash-tats/illustrative/illustrative.js';
import americanTraditional from '../images/Splash-tats/american_traditional/amertrad.js';
import japaneseTraditional from '../images/Splash-tats/japanese_traditional/japantrad.js';
import waterColor from '../images/Splash-tats/water_color/water.js';
import '../styles/splash-page.css'

function SplashPage() {
    const [ amertrad1, amertrad2, amertrad3, amertrad4, amertrad5, amertrad6, amertrad7, amertrad8, amertrad9, amertrad10, amertrad11 ] = americanTraditional
    const [ illi1, illi2, illi3, illi4, illi5, illi6, illi7, illi8, illi9, illi10, illi11 ] = illustrative
    const [ japantrad1, japantrad2, japantrad3, japantrad4, japantrad5, japantrad6, japantrad7, japantrad8, japantrad9, japantrad10, japantrad11 ] = japaneseTraditional
    const [ water1, water2, water3, water4, water5, water6, water7, water8, water9, water10, water11 ] = waterColor

    const arrayWords = [
         "american traditional idea",
         "illustrative idea",
         "japanese traditional idea",
         "water color idea"
     ]
    const array1 = [ amertrad1, illi1, japantrad1, water1 ]
    const array2 = [ amertrad2, illi2, japantrad2, water2 ]
    const array3 = [ amertrad3, illi3, japantrad3, water3 ]
    const array4 = [ amertrad4, illi4, japantrad4, water4 ]
    const array5 = [ amertrad5, illi5, japantrad5, water5 ]
    const array6 = [ amertrad6, illi6, japantrad6, water6 ]
    const array7 = [ amertrad7, illi7, japantrad7, water7 ]
    const array8 = [ amertrad8, illi8, japantrad8, water8 ]
    const array9 = [ amertrad9, illi9, japantrad9, water9 ]
    const array10 = [ amertrad10, illi10, japantrad10, water10 ]
    const array11 = [ amertrad11, illi11, japantrad11, water11 ]


    return (
        <div className="splash-container">
            <div className='top-container'>
                <div className='splash-text-1'>Get your next</div>
                <div className='splash-text-2'>
                    {
                        arrayWords.map((string, i) => {
                            return <div key={i} className={`string-${i}`}>{string}</div>
                        })
                    }
                </div>
            </div>
            <div className='bottom-container'>

                <div className='card-1'>
                    <div className='crust-layer-left'>
                        {
                            array1.map((url, i) => {
                                return <img key={i} className={`img-card card1-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                    <div className='crust-layer-left'>
                        {
                            array2.map((url, i) => {
                                return <img key={i} className={`img-card card1-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-2'>
                    <div className='mantle-layer-left'>
                        {
                            array3.map((url, i) => {
                                return <img key={i} className={`img-card card2-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                    <div className='mantle-layer-left'>
                        {
                            array4.map((url, i) => {
                                return <img key={i} className={`img-card card2-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-3'>
                    <div className='outer-core-layer-left'>
                        {
                            array5.map((url, i) => {
                                return <img key={i} className={`img-card card3-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-4'>
                    <div className='inner-core-layer'>
                        {
                            array6.map((url, i) => {
                                return <img key={i} className={`img-card card4-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-5'>
                    <div className='outer-core-layer-right'>
                        {
                            array7.map((url, i) => {
                                return <img key={i} className={`img-card card5-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-6'>
                    <div className='mantle-layer-right'>
                        {
                            array8.map((url, i) => {
                                return <img key={i} className={`img-card card6-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                    <div className='mantle-layer-right'>
                        {
                            array9.map((url, i) => {
                                return <img key={i} className={`img-card card6-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='card-7'>
                    <div className='crust-layer-right'>
                        {
                            array10.map((url, i) => {
                                return <img key={i} className={`img-card card7-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                    <div className='crust-layer-right'>
                        {
                            array11.map((url, i) => {
                                return <img key={i} className={`img-card card7-${i}`} src={url} alt="tattoo" />
                            })
                        }
                    </div>
                </div>
                <div className='bottom-grad'></div>
            </div>
        </div>
    );
}

export default SplashPage;
