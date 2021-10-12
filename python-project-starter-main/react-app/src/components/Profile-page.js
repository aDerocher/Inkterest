import React from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/profile-page.css";

function Profile_page() {
  let history = useHistory();

  const options = ["pin", "board"];
  // const defaultOption = options[0];

  const redirect = () => {
    history.push("/settings");
  };

  const pinCreateHandler = (options) => {
    if (options.value == "pin") {
      history.push("/pin-builder");
    } else {
      history.push("/board");
    }
  };

  const user = useSelector((state) => state.session.user);

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
        <div className="profile-follwer/follwing">1 follwer 1 following</div>
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
          />
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="profile-page-collection"></div>
    </div>
  );
}

export default Profile_page;
