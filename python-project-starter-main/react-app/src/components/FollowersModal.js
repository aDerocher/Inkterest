import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/follows-modal.css";
import { followUser, unfollowUser } from "../store/user";
import { listAllUsers } from "./../store/user";

const FollowersModal = (props) => {
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(null);

  const { userId } = useParams();
  const users = useSelector((state) => state.user)
  const user = users.filter(user => user.id.toString() === userId)[0]

  useEffect(() => {
    dispatch(listAllUsers())
  }, [dispatch])

  const handleFollow = (userId) => {
    dispatch(followUser(userId));
    setIsFollowing(true);
    window.location.reload(false);
  };

  const handleUnFollow = (userId) => {
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
              {
                user.followers.length > 1
                ? <h4>Followers</h4>
                : <h4>Follower</h4>
              }
          </div>
        </div>
        <div className="close-button">
        </div>
        <div className="follows-modal-body">
          {user?.followers.map((f) => (
            <div id={f[1]} key={f[1]} className="follows-modal-row">
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
              {/* {isFollowing ? (
                <button
                  // id={f[1]}
                  // key={f[1]}
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
              )} */}
              <button
                onClick={() => handleFollow(f[1])}
                className="toggle-follow-btn"
              >
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
