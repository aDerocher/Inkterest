import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { changeProfile } from "../store/profileEdit";

function ProfileEdit() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const userId = user?.id;
  //   console.log(user);

  const [first_name, setFirst_name] = useState(user?.first_name);
  const [last_name, setLast_name] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [username, setUsername] = useState(user?.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
    };

    dispatch(changeProfile(profile, userId));
  };

  if (!user) return <Redirect to="/" />;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <form onSubmit={handleSubmit}>
          <h1>Public Profile</h1>
          <div className="name-container">
            <div className="firstName-container">
              <label>First Name</label>
              <input
                className="edit-firstName"
                type="text"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="lastName-container">
              <label>Last Name</label>
              <input
                className="edit-lastName"
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
          </div>
          <div className="email-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="userName-container">
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}
          <button className="save-button" type="Submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
