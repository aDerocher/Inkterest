import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { changeInk, listOneInk } from '../store/ink'
import "../styles/edit-ink-modal.css";

const EditInkModal = (props) => {
    const dispatch = useDispatch();
    const { inkId } = useParams();

    // direct access to ink slice of state - houses ONE ink
    const ink = useSelector(state => state?.inks[0])
    const [title, setTitle] = useState(ink?.title);
    const [subtitle, setSubtitle] = useState(ink?.subtitle);
    const [destination_link, setDestination_link] = useState(ink?.destination_link);

    useEffect(() => {
        dispatch(listOneInk(inkId))
        setTitle(ink?.title)
        setSubtitle(ink?.subtitle)
        setDestination_link(ink?.destination_link)
    }, [dispatch, ink?.title, ink?.subtitle, ink?.destination_link, inkId])

    const handleSubmit = (inkId) => {
        const ink = {
            title: title,
            subtitle: subtitle,
            destination_link: destination_link
        }

        dispatch(changeInk(ink, inkId))
        return props.onClose
    };


    if (!props.show) {
        return null;
    }

    return (
        <div className="ink-modal" onClick={props.onClose}>
            <div className="ink-modal-content" onClick={(e) => e.stopPropagation()}>
                Edit Ink
                <form className='ink-edit-form' onSubmit={() => handleSubmit(ink?.id)}>
                    <label className='edit-form-label' for='edit-ink-title'>Title</label>
                    <input
                        className='edit-ink-title'
                        type='text'
                        value={title}
                        required='true'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className='edit-form-label' for='edit-ink-subtitle'>Subtitle</label>
                    <input
                        className='edit-ink-subtitle'
                        type='text'
                        placeholder='Subtitle'
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                    <label className='edit-form-label' for='edit-ink-destination-link'>Destination Link</label>
                    <input
                        className='edit-ink-destination-link'
                        type='text'
                        placeholder='Add a link to your site'
                        value={destination_link}
                        onChange={(e) => setDestination_link(e.target.value)}
                    />
                    <div className='edit-form-btn-container'>
                        <button className='edit-form-cancel' onClick={props.onClose}>Cancel</button>
                        <button className='edit-form-submit' type='Submit'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EditInkModal;
