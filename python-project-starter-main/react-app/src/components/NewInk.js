import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createInk } from '../store/ink'
// import '../../reset.css'



function NewInkForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    if (!sessionUser) return <Redirect to="/" />;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedFile)
        const newImage = {
            creator_id: sessionUser.id,
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
                    className='description input'
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
        </div>
    );
}

export default NewInkForm;
