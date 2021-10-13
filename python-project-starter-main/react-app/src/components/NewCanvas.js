import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createCanvas, listAllCanvases } from '../store/canvas'
import '../styles/canvas.css'



function NewCanvasForm() {
    const dispatch = useDispatch();
    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    useEffect(() => {
        dispatch(listAllCanvases())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCanvas = {
            name: name,
            isPrivate: isPrivate,
        }

        dispatch(createCanvas(newCanvas))
            .then(() => {
                setName('');
                setIsPrivate(false);
            })
        // history.push(`/`);
    };

    // ========================================== COMPONENT

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className='canvName input'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Canvas Name'
                />
                <input
                    className='canvPrivate input'
                    type='checkbox'
                    value={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.value)}
                />
                <button
                    type='submit'
                    className='file-upload-btn'
                    >
                    Create
                </button>
            </form>

            {/* {
                inks?.map((ink) => {
                    return <span>
                        <img
                            className={`ink ${ink.id}`}
                            key={ink.id}
                            src={ink.image}
                        />
                        <button
                            className={`delete-${ink.id}`}
                            key={ink.id}
                            onClick={(e) => handleDelete(e, ink.id)}
                        >
                        Delete Ink
                        </button>
                    </span>
                })
            } */}
        </div>
    );
}

export default NewCanvasForm;
