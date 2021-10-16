import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams} from 'react-router-dom';
import { listOneInk } from '../store/ink'
import { listOneUser, followUser, unfollowUser } from '../store/user'
import EditInkModal from './EditInkModal';
import DeleteInkModal from './DeleteInkModal';
import '../styles/reset-styles.css'
import '../styles/ink-page.css'

function InkPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { userId, inkId } = useParams();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);

    // direct access to ink slice of state - houses ONE ink
    const ink = useSelector(state => state?.inks[0])

    // direct access to canvases array/slice of state
    const canvases = useSelector(state => state.canvases)

    // direct access to user array/slice of state
    const user = useSelector(state => state?.user[0])

    const [isFollowing, setIsFollowing] = useState(null)
    const [inkDropdown, setInkDropdown] = useState(false)

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    console.log(showDeleteModal)

    useEffect(() => {
        dispatch(listOneInk(inkId))
        setIsFollowing(user?.followers.some((el) => el[1] === sessionUser?.id))
    }, [dispatch, user?.id])

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
        // if I try to close the dropdown, modal will not show until I click tooltip btn
    }

    const handleDropdownDeleteClose = (e) => {
        e.preventDefault()
        setShowDeleteModal(true)

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


                    <a className='ink-link' href={`https://${ink?.destination_link}`}>{ink?.destination_link}</a>
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
