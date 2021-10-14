import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAllFollowers, listAllFolloweds } from "../store/follow";
import "../styles/profile-page.css";
import CreateCanvasModal from "./CreateCanvasModal"

function ProfilePage() {
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

  const redirect = () => {
    history.push("/settings");
  };

  const pinCreateHandler = (options) => {
    if (options.value === "ink") {
      history.push("/inks/new-ink");
    } else {
        setShow(true)
    }
    // plus.innerHTML = "qqq"
    console.log(plus)
  };

  useEffect(() => {
    dispatch(listAllFolloweds());
    dispatch(listAllFollowers());
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);
  const plus = document.getElementById("plus-btn")
  const allFollows = useSelector((state) => state.follows);
  console.log(allFollows?.followers?.Followers.length);

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
          {allFollows?.followers?.Followers.length} follower
        </div>
        <div className="profile-follwer/follwing">
        {allFollows?.followeds?.Followed.length} following
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
      <div className="profile-page-collection"></div>
    </div>
  );
}

export default ProfilePage;
