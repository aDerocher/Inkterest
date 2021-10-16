import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router";
import { createCanvas } from '../store/canvas'
import "../styles/index.css";
import "../styles/create-canvas-modal.css";


function CreateCanvasModal(props) {
    // const history = useHistory();
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [errors, setErrors] = useState([]);
    const [ errorsHidden, setErrorsHidden ] = useState(true);

    useEffect(() => {
        let newErrors = [];
        if (name.length < 2 ) newErrors.push("Name must be at least 3 characters")
        if (name.length > 50 ) newErrors.push("Canvas names can not exceed 50 characters")
        setErrors(newErrors)

    }, [name])

    
    // ========================================== Submission Function
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorsHidden(false)
        if(errors.length > 0){
            return
        }
        const newCanvas = {
            name: name,
            private_canvas: isPrivate,
        }
        dispatch(createCanvas(newCanvas))
            .then(() => {
                setName('');
                setIsPrivate(false);
            })
        props.onClose()
    };

    if (!props.show) {
        return null;
    }
    // ========================================== COMPONENT
    return (
    <div className="cc-modal" onClick={props.onClose}>
        <div className="cc-modal-content"onClick={e => e.stopPropagation() }>
            <h3 className="cc-modal-title">Create Canvas</h3>
            <form className="cc-modal-body" onSubmit={handleSubmit}>
                <div hidden={errorsHidden}>
                    {errors.map((error, ind) => (
                        <div className='cc-error' key={ind}>{error}</div>
                    ))}
                </div>

                <p className="small-grey-label" htmlFor='canvName'>Canvas Name</p>
                <input
                    className='canvName input'
                    name="canvName"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Canvas Name'
                    maxLength={50}
                />
                <p className="small-grey-label" htmlFor='canvName'>Is Private</p>
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

            <div className='cc-sub-btn'>
                <button
                    type='submit'
                    className='round-red-button'
                    >
                    Create
                </button>
            </div>
            </form>
        </div>
    </div>    
  );
}

export default CreateCanvasModal;