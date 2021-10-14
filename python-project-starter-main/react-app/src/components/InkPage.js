import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, NavLink } from 'react-router-dom';
import '../styles/reset-styles.css'
import '../styles/ink-page.css'

function InkPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    const canvases = useSelector(state => state.canvases)

    // direct access to inks array/slice of state
    // const inks = useSelector(state => state.inks)

    // direct access to canvases array/slice of state

    if (!sessionUser) return <Redirect to="/" />;

    // ========================================== COMPONENT

    return (
        <div className='container'>
            <div className='ink-container'>
                <div className='ink-left'>
                    <img
                        className='preview-img'
                        src={null}
                        alt='preview'
                    />
                </div>
                <div className='ink-right'>
                    <div className='title input'> </div>
                    <div className='subtitle input'> </div>
                    <div className='destination input'> </div>
                </div>
            </div>
        </div>
    );
}

export default InkPage;
