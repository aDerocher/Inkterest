import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";
import { getOneCanvas, editCanvas, removeCanvas } from "./../store/canvas"
import "../styles/index.css";
import "../styles/canvas-edit.css";


function CanvasEdit() {
    const { canvasId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const canvasToEdit = useSelector(state => state.canvases[0])
    
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [errors, setErrors] = useState([]);
    const [errorsHidden, setErrorsHidden] = useState(true);
    
    useEffect(() => {
        let newErrors = [];
        if (name.length < 2 ) newErrors.push("Name must be at least 3 characters")
        if (name.length > 50 ) newErrors.push("Canvas names can not exceed 50 characters")
        setErrors(newErrors)
    }, [name])

    useEffect(() => {
        dispatch(getOneCanvas(canvasId))
    }, [])

    
    // ========================================== Submission Functions
    const handleSubmit = (e) => {
        setErrorsHidden(false)
        e.preventDefault();
        const editedCanvas = {
            name: name,
            private_canvas: isPrivate,
            canvas_id: canvasToEdit.id,
        }
        dispatch(editCanvas(editedCanvas))
        history.push(`/users/${sessionUser.id}`)
    };

    const deleteThisCanvas = (e, canvas_id) => {
        e.preventDefault();
        dispatch(removeCanvas(canvas_id))
        history.push(`/users/${sessionUser.id}`)
    }

    // ========================================== COMPONENT
    return (
    <div className="canv-edit-container">

            <form className="canv-edit-form" onSubmit={handleSubmit}>
                <h2 className='c-e-title'>Edit your canvas</h2>
                    
                <div hidden={errorsHidden}>
                    {errors.map((error, ind) => (
                        <div className='c-e-error' key={ind}>{error}</div>
                    ))}
                </div>

                <label htmlFor="canvName" className='edit-canv-label small-grey-label'>Name</label>
                <input
                    className='edit-canv-input'
                    name="canvName"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={canvasToEdit?.name}
                    maxLength={50}
                />
                <p className='small-grey-label'>Settings</p>
                <div className="c-e-check-container">
                    <input
                        className='edit-canv-checkbox'
                        type='checkbox'
                        checked={isPrivate}
                        value={isPrivate}
                        onChange={(e) => {
                            console.log('the box changed from: ', isPrivate)
                            setIsPrivate(!isPrivate)
                            console.log('to: ', isPrivate)
                        }}
                    /> <p><em className="bold">Keep this board secret</em></p>
                </div>

                <div className="c-e-buttons-container">
                    <button
                        className='round-red-button c-e-delete-button'
                        onClick={e => deleteThisCanvas(e, canvasToEdit.id)}
                        >Delete Canvas
                    </button>
                    <button
                        type='submit'
                        className='round-red-button edit-canv-submit'
                        disabled={errors.length > 0}
                        >
                        Done
                    </button>
                </div>
            </form>
            <button className='c-e-close-button'>X</button>
    </div>    
  );
}

export default CanvasEdit;