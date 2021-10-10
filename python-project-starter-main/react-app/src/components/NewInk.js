import React, { useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createInk } from '../store/ink'
// import '../../reset.css'



function NewInkForm() {
    const fileInputRef = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [destination_link, setDestination_link] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    if (!sessionUser) return <Redirect to="/" />;


    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            creator_id: sessionUser.id,
            image: selectedFiles[0],
            title: title,
            subtitle: subtitle,
            destination_link:
            destination_link
        }

        dispatch(createInk(newImage))
            .then(() => {
                setTitle('');
                setSubtitle('');
                setDestination_link('');
            })
        history.push(`/`);
    };

    // ========================================== DROPZONE VALIDATIONS

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) return false
        return true;
    }

    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                // add a new property called invalid
                files[i]['invalid'] = true;
                // add to the same array so we can display the name of the file
                setSelectedFiles(selectedFiles => [...selectedFiles, files[i]]);
                // set error msg
                setErrorMessage('File type is not supported at this time!');
            }
        }

    }

    // ========================================== DROPZONE HANDLERS

    const removeFile = (name) => {
        // find the index of the item
        // remove the item from array
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
        setErrorMessage('');
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    // ========================================== DRAG/DROP HANDLERS

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) handleFiles(files)

    }

    // ========================================== HIDDEN INPUT

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }
    
    // ========================================== COMPONENT

    return (
        <div>
            <div className="content">
                <div className="container">
                    {/* <button className='go-back-btn' type='submit' onClick={handleBack}>Back to Images</button> */}
                    <button className='file-upload-btn' onClick={handleSubmit} disabled={!selectedFiles.length || errorMessage !== ''}>submit ink</button>
                    <div
                        className="drop-container"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                        onClick={fileInputClicked}
                    >
                        <div className="drop-message">
                            <div className="upload-icon"></div>
                            Drag & Drop files here or click to upload
                        </div>
                        <input
                            ref={fileInputRef}
                            className="file-input"
                            type="file"
                            multiple
                            onChange={filesSelected}
                        />
                    </div>

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
                            placeholder='Sub-title'
                        />
                        <input
                            className='description input'
                            type='text'
                            value={destination_link}
                            onChange={(e) => setDestination_link(e.target.value)}
                            placeholder='Add a link to your site'
                        />

                    <div className="file-display-container">
                        {
                            selectedFiles.map((data, i) =>
                                <div className="file-status-bar" key={i}>
                                    <div className='file-details'>
                                        <div className="file-type-logo"></div>
                                        <div className="file-type">{fileType(data.name)}</div>
                                        <div className='file-name'>{data.name}</div>
                                        {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                                    </div>
                                    <div className="file-remove" onClick={() => removeFile(data.name)}>
                                        <p className='x-button'>x</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewInkForm;
