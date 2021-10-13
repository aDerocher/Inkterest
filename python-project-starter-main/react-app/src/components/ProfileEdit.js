import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

function ProfileEdit() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <form action="">
          <h1>Public Profile</h1>
          <div className="name-container">
            <div className="firstName-container">
              <label>First Name</label>
              <input className="edit-firstName" type="text" />
            </div>
            <div className="lastName-container">
              <label>Last Name</label>
              <input className="edit-lastName" type="text" />
            </div>
          </div>
          <div className="email-container">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className='userName-container'>
              <label>User Name</label>
              <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
