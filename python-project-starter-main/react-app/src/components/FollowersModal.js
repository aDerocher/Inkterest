import React, {useEffect}from 'react';
import { useSelector } from 'react-redux';
import '../styles/follows-modal.css'

const FollowersModal = props => {

    const allFollowers = useSelector(state => state.session.user.followers)

    useEffect(() => {
        console.log(allFollowers, "all followerssssssssssssssssssssssssssss")
    }, [allFollowers])

    if(!props.show) {
        return null
    }
    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation() }>
                <div className='modal-header'>
                    <h4 className='modal-title'>Follows</h4>
                    <button className='button close-follows-btn' onClick={props.onClose} >X</button>
                </div>
                <div className='follows-modal-body'>

                    {allFollowers.map((f) => (
                        <div key={f[0]} className="follows-modal-row">
                            <div>
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

export default FollowersModal;
