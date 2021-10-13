import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createInk, listAllInks, removeInk } from '../store/ink'
import '../styles/ink.css'



function NewInkForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    // direct access to inks array/slice of state
    const inks = useSelector(state => state.inks)

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        dispatch(listAllInks())
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
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className="file input"
                    type="file"
                    accept='image/*'
                    onChange={updateImage}
                />
                <input
                    className='title input'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                />
                <input
                    className='subtitle input'
                    type='text'
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder='Subtitle'
                />
                <input
                    className='destination input'
                    type='text'
                    value={destination_link}
                    onChange={(e) => setDestination_link(e.target.value)}
                    placeholder='Add a link to your site'
                />
                <button
                    type='submit'
                    className='file-upload-btn'
                    >
                    submit ink
                </button>
            </form>

            {
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
            }
        </div>
    );
}

export default NewInkForm;
