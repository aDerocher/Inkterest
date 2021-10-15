import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/profile-page.css";
import CreateCanvasModal from "./CreateCanvasModal"
import ProfileModal from "./ProfileDDModal";
import FollowersModal from "./FollowersModal";
import FollowingsModal from "./FollowingsModal";
import { useParams } from "react-router-dom";
import { listUsersCanvases } from "./../store/canvas"

function ProfilePage() {

    const params = useParams()
    const viewingUserId = params.userId;

  let history = useHistory();
  const dispatch = useDispatch();

  // options are for the new-ink/new-canvas dropdown menu
  const options = [
    {
        type: 'group', name: 'create', items: [
            { value: 'ink', label: 'Ink', className: 'create-option' },
            { value: 'canvas', label: 'Canvas', className: 'create-option' }
        ]
    }
  ];

  const [show, setShow] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);


  const redirect = () => {
    history.push("/profile-edit");
  };

  const pinCreateHandler = (options) => {
    if (options.value === "ink") {
      history.push("/inks/new-ink");
    } else {
        setShow(true)
    }
  };

  const user = useSelector((state) => state.session.user);
  const plus = document.getElementById("plus-btn")

  
  useEffect(() => {
    dispatch(listUsersCanvases(viewingUserId));
  }, [dispatch]);

  const curUserCanvases = []

  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <span className="image-circle">
            <img src="" alt="" />
          </span>
        </div>
        <div className="profile-name">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
        </div>
        <div className="profile-contact">{user.email}</div>
        <div className="profile-follwer/follwing">
          {/* <p onClick={}>{user.followers.length} follower</p> */}
          <button onClick={() => setShowFollowers(true)} >{user.followers.length} follower</button>
          <FollowersModal onClose={() => setShowFollowers(false)} show={showFollowers}/>
        <button onClick={() => setShowFollowings(true)} >{user?.followed?.length} following</button>
          <FollowingsModal onClose={() => setShowFollowings(false)} show={showFollowings}/>
      </div>
        </div>
      <div className="profile-page-body">
        <div className="profile-page-edit">
          <button onClick={redirect}>Edit</button>
        </div>
        <div className="profile-page-upload">
            <CreateCanvasModal onClose={() => setShow(false)} show={show}/>
            <Dropdown
                id='plus-btn'
                options={options}
                onChange={pinCreateHandler}
                placeholder="+"
                className="plus-dd"
                menuClassName="menu"
                controlClassName="control"
                // className="fas fa-plus"
            />
        </div>
      </div>
      <div className="profile-page-collection">
          {curUserCanvases?.map((c) => (
              <p key={c.id}>c.name</p>
          ))}
      </div>
    </div>
  );
}

export default ProfilePage;
