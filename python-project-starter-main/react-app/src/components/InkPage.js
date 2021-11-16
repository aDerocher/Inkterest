import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams} from 'react-router-dom';
import { listOneInk } from '../store/ink'
import { listOneUser, followUser, unfollowUser } from '../store/user'
import EditInkModal from './EditInkModal';
import DeleteInkModal from './DeleteInkModal';
import '../styles/reset-styles.css'
import '../styles/ink-page.css'
import { addToSaved, removeFromSaved, getAllSaved } from "../store/saved_inks";


function InkPage() {
    // const history = useHistory();
    const dispatch = useDispatch();
    const { userId, inkId } = useParams();

    // direct access to: session user/slice of state
        const sessionUser = useSelector(state => state.session.user);
    // direct access to ink slice of state - houses ONE ink
        const ink = useSelector(state => state?.inks[0])
    // direct access to user array/slice of state
        const user = useSelector(state => state?.user[0])
    // direct access to canvases array/slice of state
    // const canvases = useSelector(state => state.canvases)
    // direct access to saved inks array/slice of state
    const saved_inks = useSelector(state => state.saved_inks)

    const [isFollowing, setIsFollowing] = useState(null)
    const [isSaved, setIsSaved] = useState(null)
    console.log(isSaved)
    console.log(ink?.id)
    const [inkDropdown, setInkDropdown] = useState(false)

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        dispatch(listOneInk(inkId))
        setIsFollowing(user?.followers.some((el) => el[1] === sessionUser?.id))
    }, [dispatch, user?.id])

    useEffect(() => {
        dispatch(getAllSaved(sessionUser?.id))
        setIsSaved((sessionUser?.saved_inks.some((el) => el.id === ink?.id)))
    }, [dispatch, ink?.id])

    useEffect(() => {
        dispatch(listOneUser(userId,inkId))
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/" />;

    const handleFollow = (e, userId) => {
        e.preventDefault()
        dispatch(followUser(userId))
        setIsFollowing(true)
    }

    const handleUnFollow = (e, userId) => {
        e.preventDefault()
        dispatch(unfollowUser(userId))
        setIsFollowing(false)
    }

    const handleDropdown = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (inkDropdown) setInkDropdown(false)
        else setInkDropdown(true)
    }

    const handleDropdownEditClose = (e) => {
        e.preventDefault()
        setShowEditModal(true)
    }

    const handleDropdownDeleteClose = (e) => {
        e.preventDefault()
        setShowDeleteModal(true)
    }

    const handleSaveInk = (e, inkId) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(addToSaved(inkId, sessionUser.id))
        setIsSaved(true)
    }

    const handleUnsaveInk = (e, inkId) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(removeFromSaved(inkId, sessionUser.id))
        setIsSaved(false)
    }

    // ========================================== COMPONENT

    return (
        <div className='ink-page-container'>
            <div className='ink-container'>
                <div className='ink-left'>
                    <img
                        className='preview-img'
                        src={ink?.image}
                        alt='preview'
                    />
                </div>
                <div className='ink-right'>

                    {
                    sessionUser &&
                    sessionUser?.id === user?.id &&
                        <div className='ink-drop' onClick={(e) => handleDropdown(e)}>
                            <ion-icon className='ink-tools' name="options-outline"></ion-icon>
                        </div>
                    }

                    {
                    inkDropdown &&
                        (
                            <div className='tool-btn-container'>
                                <button
                                    className='tool-btn-edit'
                                    onClick={(e) => handleDropdownEditClose(e)}
                                >Edit</button>

                                <button
                                    className='tool-btn-delete'
                                    onClick={(e) => handleDropdownDeleteClose(e)}
                                >Delete</button>
                            </div>
                        )
                    }


                    <a className='ink-link' href={ink?.destination_link}>{ink?.destination_link}</a>
                    {
                    isSaved
                    ? <button className='unsave-btn' onClick={e => handleUnsaveInk(e, ink?.id)}>Unsave</button>
                    : <button className='save-btn' onClick={e => handleSaveInk(e, ink?.id)}>Save</button>
                    }
                    <div className='ink-title'>{ink?.title}</div>
                    <div className='ink-subtitle'>{ink?.subtitle} </div>
                    <div className='ink-profile'>
                        <img className='ink-user-img' src={user?.profile_picture} alt='user'/>
                        <div className='user-info'>
                            <div className='user-text'>
                                <a className='user-name' href={`/users/${user?.id}`}>{user?.username}</a>
                                <div className='user-followers'>{user?.followers.length} followers</div>
                            </div>
                            {
                            sessionUser &&
                            sessionUser?.id !== user?.id &&
                                (
                                isFollowing
                                ? <button className='unfollow-btn' onClick={(e) => handleUnFollow(e, user?.id)}>Unfollow</button>
                                : <button className='follow-btn' onClick={(e) => handleFollow(e, user?.id)}>Follow</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                showEditModal && (
                    <EditInkModal
                        show={showEditModal}
                        onClose={() => setShowEditModal(false)}
                    />
                )
            }
            {
                showDeleteModal && (
                    <DeleteInkModal
                        show={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                    />
                )
            }
        </div>
    );
}

export default InkPage;
