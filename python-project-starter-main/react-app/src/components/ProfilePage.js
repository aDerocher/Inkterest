import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAllFollowers, listAllFolloweds} from "../store/follow";
import "../styles/profile-page.css";
import CreateCanvasModal from "./CreateCanvasModal"

function ProfilePage() {
  let history = useHistory();
  const dispatch = useDispatch();

  const options = [

    // { value: 'NEW-INK', label: 'Ink', className: 'create-option' },
    // { value: 'NEW-CANVAS', label: 'Canvas', className: 'create-option' },
    {
        type: 'group', name: 'create', items: [
            { value: 'ink', label: 'Ink', className: 'create-option' },
            { value: 'canvas', label: 'Canvas', className: 'create-option' }
        ]
    }
  ];

  const [show, setShow] = useState(false);
  // const defaultOption = options[0];

  const redirect = () => {
    history.push("/settings");
  };

  const pinCreateHandler = (options) => {
    if (options.value === "ink") {
      history.push("/inks/new-ink");
    } else {
      history.push("/canvases/new-canvas");
    }
  };

  useEffect(() => {
    dispatch(listAllFolloweds());
    dispatch(listAllFollowers());
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);

  const allFollows = useSelector((state) => state.follows);

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
        <div className="profile-follwer/follwing">{allFollows?.followers?.Followers.length}</div>
        <div className="profile-follwer/follwing">{allFollows?.followeds?.Followed.length}</div>
      </div>
      <div className="profile-page-body">
        <div className="profile-page-edit">
          <button onClick={redirect}>Edit</button>
        </div>
        <div className="profile-page-upload">
            {/* <button>Add</button> */}
            <Dropdown
                options={options}
                onChange={pinCreateHandler}
                placeholder="+"
                className="plus-dd"
                menuClassName="menu"
                controlClassName="control"
                // className="fas fa-plus"
            />
            {/* <button onClick={() => setShow(true) } className="chevron-btn">CREATE</button> */}
            {/* <CreateCanvasModal onClose={() => setShow(false)} show={show}/> */}
        </div>
      </div>
      <div className="profile-page-collection"></div>
    </div>
  );
}

export default ProfilePage;
