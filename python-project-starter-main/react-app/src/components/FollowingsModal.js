import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/follows-modal.css'

const FollowingsModal = props => {
    const allFollowings = useSelector(state => state.session.user.followed)

    if(!props.show) {
        return null
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation() }>
                <div className='modal-header'>
                    <h4 className='modal-title'>Following</h4>
                    <button onClick={props.onClose} className='button'>Close</button>
                </div>
                <div className='follows-modal-body'>

                    {allFollowings.map((f) => (
                        <div key={f[0]} className="follows-modal-row">
                            <div className='follow-user-container'>
                                <img src="" alt="circle" />
                                <p>Username</p>
                            </div>

                            <button className='toggle-follow-btn'>follow</button>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FollowingsModal;
