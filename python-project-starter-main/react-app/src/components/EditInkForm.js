import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { listOneInk } from '../store/ink'
import '../styles/ink.css'



function NewInkForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    // direct access to ink array/slice of state
    const ink = useSelector(state => state.inks)



    useEffect(() => {
        dispatch(listOneInk(params.inkId))
        console.log(ink)
    }, [dispatch])

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push(`/`);
    };

    // ========================================== COMPONENT

    return (
        <div>
                <h1>{ink?.id}</h1>
            <form onSubmit={handleSubmit}>
                
                <input />
                <input />
                <input />
                <input />
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewInkForm;
