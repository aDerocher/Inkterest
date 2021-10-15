import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/follows-modal.css";
import { followUser } from '../store/user'

const FollowersModal = (props) => {
  const allFollowers = useSelector((state) => state.session.user.followers);

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();



  const handleFollower = (userId) => {
    // e.preventDefault();
    console.log(userId, '-----------------------------');
    dispatch(followUser(userId))
  };

  

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h4>{user.followers.length} Follower</h4>
          </div>
        </div>
        <div className="close-button">
          <span onClick={props.onClose}>Ｘ</span>
        </div>
        <div className="follows-modal-body">
          {allFollowers.map((f) => (
            <div key={f[0]} className="follows-modal-row">
              <div className="follow-user-container">
                <img src="" alt="circle" />
                <p>{f[0]}</p>
              </div>
              <button onClick={() => handleFollower(f[1])} className="toggle-follow-btn">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
