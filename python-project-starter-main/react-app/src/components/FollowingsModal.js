import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/follows-modal.css";
import { followUser, unfollowUser } from "../store/user";

const FollowingsModal = (props) => {
  const allFollowings = useSelector((state) => state.session.user.followed);

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const handleUnFollow = (userId) => {
    // e.preventDefault();
    dispatch(unfollowUser(userId));
    // setIsFollowing(false);
    window.location.reload(false);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h4>{user.followed.length} Following</h4>
          </div>
        </div>
        <div className="close-button">
          <span onClick={props.onClose}>Ｘ</span>
        </div>
        <div className="follows-modal-body">
          {allFollowings.map((f) => (
            <div key={f[0]} className="follows-modal-row">
              <div className="follow-user-container">
                <img src="" alt="circle" />
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
