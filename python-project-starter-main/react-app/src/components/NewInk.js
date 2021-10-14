import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createInk, listAllInks, removeInk } from '../store/ink'
import { listAllCanvases } from '../store/canvas'
import '../styles/reset-styles.css'
import '../styles/new-ink.css'


function NewInkForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    // direct access to inks array/slice of state
    const inks = useSelector(state => state.inks)
    // direct access to inks array/slice of state
    const canvases = useSelector(state => state.canvases)

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        dispatch(listAllCanvases())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newImage = {
            image: selectedFile,
            title: title,
            subtitle: subtitle,
            destination_link: destination_link
        }

        dispatch(createInk(newImage))
            .then(() => {
                setTitle('');
                setSubtitle('');
                setDestination_link('');
            })
        // history.push(`/`);
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleDelete = (e, inkId) => {
        e.preventDefault()
        dispatch(removeInk(inkId))
    }

    const handleEditBtn = (inkId) => {
        history.push(`/inks/${inkId}/edit`)
    }

    // ========================================== COMPONENT

    return (
        <div className='container'>
            <div className='form-container'>
                <form className="new-ink-form" onSubmit={handleSubmit}>
                    <div className='form-top'>
                        <select id='canvas-list'>
                            {
                                canvases?.map((canvas) => {
                                    return <option value={canvas.name}>{canvas.name}</option>
                                })
                            }
                        </select>
                        <div className='canvas-selector'>Canvas</div>
                    </div>

                    <div className='form-bottom'>

                        <div className='bottom-left'>
                            <label
                            for='file-input'
                            className="file-input"
                            >
                                <div className='dotted-div'>upload</div>
                            </label>
                            <input
                                id='file-input'
                                type="file"
                                accept='image/*'
                                onChange={updateImage}
                            />

                            <button
                                type='submit'
                                className='file-upload-btn'
                            >
                                submit ink
                            </button>
                        </div>

                        <div className='bottom-right'>
                            <textarea
                                className='title input'
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Add your title'
                            />
                            <input
                                className='subtitle input'
                                type='text'
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                placeholder='Tell everyone what your ink is about'
                            />
                            <input
                                className='destination input'
                                type='text'
                                value={destination_link}
                                onChange={(e) => setDestination_link(e.target.value)}
                                placeholder='Add a destination link'
                            />

                        </div>

                    </div>

                </form>
            </div>

            {/* {
                inks?.map((ink) => {
                    return <span key={ink.id}>
                        <img
                            className={`ink ink-${ink.id}`}
                            src={ink.image}
                            onClick={(e) => handleDelete(e, ink.id)}
                            alt=""
                        />
                        <button onClick={() => handleEditBtn(ink.id)}>Edit</button>
                    </span>
                })
            } */}
        </div>
    );
}

export default NewInkForm;
