import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from 'react-router-dom';
// import { useHistory } from "react-router";
import { createCanvas, listUsersCanvases } from "./../store/canvas"
import "../styles/create-canvas-modal.css";


function CanvasEdit() {
    const { canvasId } = useParams();
    // const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        let newErrors = [];
        if (name.length < 2 ) newErrors.push("Name must be at least 3 characters")
        if (name.length > 50 ) newErrors.push("Canvas names can not exceed 50 characters")
        setErrors(newErrors)

    }, [name])

    useEffect(() => {
        dispatch(listUsersCanvases(sessionUser.id))
    }, [dispatch])

    
    // ========================================== Submission Function
    const handleSubmit = (e) => {
        e.preventDefault();
        // const editCanvas = {
        //     name: name,
        //     private_canvas: isPrivate,
        // }
        // dispatch(createCanvas(newCanvas))
        //     .then(() => {
        //         setName('');
        //         setIsPrivate(false);
        //     })
    };

    // ========================================== COMPONENT
    return (
    <div className="cc-modal">

            <form className="cc-modal-body" onSubmit={handleSubmit}>
                
                <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
                </div>

                <label htmlFor='canvName'>Canvas Name</label>
                <input
                    className='canvName input'
                    name="canvName"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Canvas Name'
                    maxLength={50}
                />
                <input
                    className='canvPrivate input'
                    type='checkbox'
                    checked={isPrivate}
                    value={isPrivate}
                    onChange={(e) => {
                        console.log('the box changed from: ', isPrivate)
                        setIsPrivate(!isPrivate)
                        console.log('to: ', isPrivate)
                    }}
                    />
                <button
                    type='submit'
                    className='file-upload-btn'
                    disabled={errors.length > 0}
                    >
                    Create
                </button>
            </form>

    </div>    
  );
}

export default CanvasEdit;