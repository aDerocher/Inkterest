import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router";
import { createCanvas } from '../store/canvas'
import "../styles/create-canvas-modal.css";


function CreateCanvasModal(props) {
    // const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    
    
    // ========================================== Submission Function
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

    if (!props.show) {
        return null;
    }
    // ========================================== COMPONENT
    return (
    <div className="cc-modal" onClick={props.onClose}>
            <form className="cc-modal-body" onSubmit={handleSubmit}>
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
    </div>    
  );
}

export default CreateCanvasModal;