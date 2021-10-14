import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, NavLink } from 'react-router-dom';
import { createInk } from '../store/ink'
import { listUsersCanvases } from '../store/canvas'
import '../styles/reset-styles.css'
import '../styles/new-ink.css'


function NewInkForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    const canvases = useSelector(state => state.canvases)

    // direct access to inks array/slice of state
    // const inks = useSelector(state => state.inks)

    // direct access to canvases array/slice of state
    
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [select, setSelect] = useState(null)
    // const selectedCanvas = canvases?.filter((el) => el.name === select)


    useEffect(() => {
        dispatch(listUsersCanvases(sessionUser?.id))
        console.log(sessionUser)
        console.log(canvases)
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newImage = {
            image: selectedFile,
            title: title,
            subtitle: subtitle,
            destination_link: destination_link,
            // canvas_id: selectedCanvas[0].id
        }

        dispatch(createInk(newImage))
            .then(() => {
                setTitle('');
                setSubtitle('');
                setDestination_link('');
            })
        history.push(`/users/${sessionUser?.id}`);
    };

    const updateImage = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    // const handleDelete = (e, inkId) => {
    //     e.preventDefault()
    //     dispatch(removeInk(inkId))
    // }

    // const handleEditBtn = (inkId) => {
    //     history.push(`/inks/${inkId}/edit`)
    // }

    const handleDiscardBtn = (e) => {
        e.preventDefault()
        setSelectedFile(null)
    }

    // ========================================== COMPONENT

    return (
        <div className='container'>
            <div className='form-container'>
                <form className="new-ink-form" onSubmit={handleSubmit}>
                    <div className='form-top'>
                        <div className='top-left'>
                            <ion-icon name="arrow-back-outline">
                                {/* FIGURE OUT A FIX FOR THIS */}
                                <NavLink to={`/users/${sessionUser?.id}`}></NavLink>
                            </ion-icon>
                        </div>
                        <div className='top-right'>
                                {/* {canvases?.length > 0 && (
                                    canvases?.map((canvas) => {
                                        // <div key={canvas.id}>
                                        <p>{canvas.id}</p>
                                        //  return <option key={canvas.id} value={canvas.name}>{canvas.name}</option> 
                                            // <option  value={canvas.name}>{canvas.name}</option>
                                        // </div>

                                        })
                                    )
                                } */}

                            <select id='canvas-list' onChange={(e) => setSelect(e.target.value)}>
                                <option>Add to your canvas</option>
                                {canvases?.length > 0 && (
                                    canvases?.map((canvas) => {
                                         return <option key={canvas.id} value={canvas.name}>{canvas.name}</option> 
                                    }))
                                }
                            </select>
                            <div className='canvas-selector'>Canvas</div>
                        </div>
                    </div>

                    <div className='form-bottom'>

                        <div className='bottom-left'>
                            <label
                            for='file-input'
                            className="file-input"
                            >
                                { selectedFile
                                ?
                                    (
                                    <>
                                        <img
                                            className='preview-file'
                                            src={URL.createObjectURL(selectedFile)}
                                            alt='preview'
                                        />
                                        <button
                                            className='preview-btn'
                                            onClick={(e) => handleDiscardBtn(e)}
                                            >Discard</button>
                                    </>
                                    )
                                :
                                    (
                                    <>
                                        <div className='dotted-div'>
                                            <ion-icon className='upload' name="cloud-upload-outline"></ion-icon>
                                            <div>Click to upload</div>
                                        </div>
                                        <input
                                        id='file-input'
                                        type="file"
                                        accept='image/*'
                                        onChange={updateImage}
                                        />
                                    </>
                                    )
                                }
                            </label>

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
