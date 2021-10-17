import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { removeInk, listOneInk } from '../store/ink'
import "../styles/delete-ink-modal.css";

const DeleteInkModal = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { inkId } = useParams();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);

    // direct access to ink slice of state - houses ONE ink
    const ink = useSelector(state => state?.inks[0])

    useEffect(() => {
        dispatch(listOneInk(inkId))
    }, [dispatch, inkId])

    const handleDelete = (e, inkId) => {
        e.preventDefault()
        dispatch(removeInk(inkId))
        history.push(`/users/${sessionUser?.id}`)
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="ink-modal" onClick={props.onClose}>
            <div className="delete-ink-modal-content" onClick={(e) => e.stopPropagation()}>
                Delete Ink?
                <form className='ink-delete-form' onSubmit={(e) => handleDelete(e, ink?.id)}>
                    <div>Are you sure you want to delete this ink?</div>
                    <div className='delete-form-btn-container'>
                        <button className='delete-form-cancel' onClick={props.onClose}>Cancel</button>
                        <button className='delete-form-submit' type='Submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteInkModal;
