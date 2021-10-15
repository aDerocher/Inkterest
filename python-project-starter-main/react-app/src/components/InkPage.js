import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, NavLink, useParams, Link } from 'react-router-dom';
import { listOneInk } from '../store/ink'
import { listOneUser } from '../store/user'
import '../styles/reset-styles.css'
import '../styles/ink-page.css'

function InkPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { inkId } = useParams();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);

    // direct access to ink slice of state - houses ONE ink
    const ink = useSelector(state => state?.inks[0])

    // direct access to canvases array/slice of state
    const canvases = useSelector(state => state.canvases)

    // direct access to user array/slice of state
    const user = useSelector(state => state?.user[0])


    useEffect(() => {
        dispatch(listOneInk(inkId))
        dispatch(listOneUser(inkId))
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
                        <img className='ink-user-img' src={user?.profile_picture} alt='user'/>
                        <div className='user-info'>
                            <div className='user-text'>
                                <div className='user-name'>{user?.username}</div>
                                <div className='user-followers'>{user?.followers.length} followers</div>
                            </div>
                            {sessionUser !== ink?.creator_id && <button className='follow-btn'>Follow</button>  }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InkPage;
