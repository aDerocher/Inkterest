import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { changeInk, listOneInk } from '../store/ink'
import "../styles/edit-ink-modal.css";

const EditInkModal = (props) => {
    const dispatch = useDispatch();
    const { inkId } = useParams();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);

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
                <form onSubmit={() => handleSubmit(ink?.id)}>

                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Subtitle'
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Add a link to your site'
                        value={destination_link}
                        onChange={(e) => setDestination_link(e.target.value)}
                    />
                    <button type='Submit'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default EditInkModal;
