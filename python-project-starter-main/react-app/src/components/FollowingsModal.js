
import React from "react";
import { useSelector } from "react-redux";
import "../styles/follows-modal.css";


const FollowingsModal = (props) => {
  const allFollowings = useSelector((state) => state.session.user.followed);

  const user = useSelector((state) => state.session.user);



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

              <button className="toggle-follow-btn">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingsModal;
