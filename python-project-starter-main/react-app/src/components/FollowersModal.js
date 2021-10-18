import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/follows-modal.css";
import { listAllUsers } from "./../store/user";

const FollowersModal = (props) => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const users = useSelector((state) => state.user)
  const user = users.filter(user => user.id.toString() === userId)[0]

  useEffect(() => {
    dispatch(listAllUsers())
  }, [dispatch])

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="flw-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='flw-modal-list'>
          <div className="modal-header">
            <div className="modal-title">
                {
                  user?.followers.length > 1
                  ? <h4>{user?.followers.length} Followers</h4>
                  : <h4>{user?.followers.length} Follower</h4>
                }
            </div>
          </div>
          <div className="close-button">
          </div>
          <div className="follows-modal-body">
            {user?.followers.map((f) => (

              <div key={f[1]} className="follows-modal-row">
                <div className="follow-user-container">
                  {
                    users?.map((user) => {
                      if (user.id === f[1]) {
                        return <img key={user.id} className='user-image' src={user.profile_picture} alt="user" />
                      }
                    })
                  }
                  <a className='fllwer-link' href={`/users/${f[1]}`}>{f[0]}</a>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
