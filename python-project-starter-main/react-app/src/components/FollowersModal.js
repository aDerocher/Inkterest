import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/follows-modal.css";
import { followUser, unfollowUser } from "../store/user";

const FollowersModal = (props) => {
  const allFollowers = useSelector((state) => state.session.user.followers);

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(null);

  const handleFollow = (userId) => {
    // e.preventDefault();
    dispatch(followUser(userId));
    setIsFollowing(true);
  };

  const handleUnFollow = (userId) => {
    // e.preventDefault();
    dispatch(unfollowUser(userId));
    setIsFollowing(false);
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
            <div id={f[1]} key={f[1]} className="follows-modal-row">
              <div className="follow-user-container">
                <img src="" alt="circle" />
                <p>
                  {f[0]} {f[1]}
                </p>
              </div>
              {isFollowing ? (
                <button
                  id={f[1]}
                  key={f[1]}
                  className="unfollow-btn"
                  onClick={() => handleUnFollow()}
                >
                  Unfollow
                </button>
              ) : (
                <button
                
                  onClick={() => handleFollow(f[1])}
                  className="toggle-follow-btn"
                >
                  Follow
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
