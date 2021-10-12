import React from "react";
import "../styles/profile-page.css";

function Profile_page() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <span className="image-circle">
            <img src="" alt="" />
          </span>
        </div>
        <div className="profile-name">
          <h1>Name</h1>
        </div>
        <div className="profile-contact">asdlkfjalksdfj@asdfkasdfklaj.com</div>
        <div className="profile-follwer/follwing">1 follwer 1 following</div>
      </div>
      <div className='profile-page-body'>
        <div className='profile-page-edit'>Edit</div>
        <div className='profile-page-upload'>Upload</div>
      </div>
      <div className='profile-page-collection'></div>
    </div>
  );
}

export default Profile_page;
