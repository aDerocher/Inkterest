import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/follows-modal.css";
import { followUser, unfollowUser } from "../store/user";
import { listAllUsers } from "./../store/user";

const FollowingsModal = (props) => {
  const allFollowings = useSelector((state) => state.session.user.followed);

  const dispatch = useDispatch();
  const handleUnFollow = (userId) => {
    // e.preventDefault();
    dispatch(unfollowUser(userId));
    // setIsFollowing(false);
    window.location.reload(false);
  };

  const { userId } = useParams();
  const users = useSelector((state) => state.user)
  const userFollowing = users.filter(user => user.id.toString() === userId)[0]

  useEffect(() => {
    dispatch(listAllUsers())
  }, [dispatch])


  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h4>{userFollowing?.followed.length} Following</h4>
          </div>
        </div>
        <div className="close-button">
          <span onClick={props.onClose}>Ｘ</span>
        </div>
        <div className="follows-modal-body">
          {userFollowing?.followed.map((f) => (
            <div key={f[0]} className="follows-modal-row">
              <div className="follow-user-container">
                {
                  users?.map((user) => {
                    if (user.id === f[1]) {
                      return <img key={user.id} className='user-image' src={user.profile_picture} alt="user" />
                    }
                  })
                }
                <p>{f[0]}</p>
              </div>

              <button
                // id={f[1]}
                // key={f[1]}
                className="unfollow-btn"
                onClick={() => handleUnFollow(f[1])}
              >
                Unfollow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingsModal;
