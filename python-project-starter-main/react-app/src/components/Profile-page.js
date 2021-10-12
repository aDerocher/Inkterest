import React, { useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAllFollows } from "../store/follow";
import "../styles/profile-page.css";

function Profile_page() {
  let history = useHistory();
  const dispatch = useDispatch();

  const options = ["pin", "board"];
  // const defaultOption = options[0];

  const redirect = () => {
    history.push("/settings");
  };

  const pinCreateHandler = (options) => {
    if (options.value === "pin") {
      history.push("/pin-builder");
    } else {
      history.push("/board");
    }
  };
  useEffect(() => {
    dispatch(listAllFollows());
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
        <div className="profile-follwer/follwing">{allFollows?.followers?.length}</div>
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
            className="fas fa-plus"
          />
          {/* <i className="fas fa-plus"></i> */}
        </div>
      </div>
      <div className="profile-page-collection"></div>
    </div>
  );
}

export default Profile_page;
