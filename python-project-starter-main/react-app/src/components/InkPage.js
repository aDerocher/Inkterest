import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, NavLink, useParams, Link } from 'react-router-dom';
import { listOneInk } from '../store/ink'
import '../styles/reset-styles.css'
import '../styles/ink-page.css'

function InkPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { inkId } = useParams();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    const canvases = useSelector(state => state.canvases)

    // direct access to ink slice of state - houses ONE ink
    const ink = useSelector(state => state?.inks[0])
    console.log(ink)
    // direct access to canvases array/slice of state

    useEffect(async () => {
        dispatch(listOneInk(inkId))
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/" />;



    // ========================================== COMPONENT

    return (
        <div className='ink-page-container'>
            <div className='ink-container'>
                <div className='ink-left'>
                    <img
                        className='preview-img'
                        src={ink?.image}
                        alt='preview'
                    />
                </div>
                <div className='ink-right'>
                    <div className='ink-drop' onClick={null}>
                        <ion-icon className='ink-tools' name="options-outline"></ion-icon>
                    </div>

                    <a className='ink-link' href={`https://${ink?.destination_link}`}>{ink?.destination_link}</a>
                    <div className='ink-title'>{ink?.title}</div>
                    <div className='ink-subtitle'>{ink?.subtitle} </div>
                    <div className='ink-profile'>
                        <img className='ink-user-img' src='#' alt='user'/>
                        <div className='user-info'>
                            <div className='user-text'>
                                <div className='user-name'>USERNAME</div>
                                <div className='user-followers'>FOLLOWERS</div>
                            </div>
                            {sessionUser !== ink.creator_id && <button className='follow-btn'>FOLLOW</button>  }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InkPage;
