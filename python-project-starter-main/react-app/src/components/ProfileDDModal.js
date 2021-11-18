import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import demoProfImage from "./../images/prof-Img_defaultSquid.png";
import checkmark from "./../images/checkMark-darkGrey.png";
import { logout }from "../store/session"
import '../styles/profileDD-modal.css'

const ProfileModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);

  const toProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`);
    props.onClose()
  };

  const toSettings = (e) => {
    e.preventDefault();
    history.push(`/profile-edit`);
    props.onClose()
  }

  const onLogout = async (e) => {
    e.preventDefault()
    history.push("/")
    await dispatch(logout());
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="prof-dd-modal" onClick={props.onClose}>
    {/* //   <div className="modal-content" >
    //     <div className="modal-header">
    //       <h4 className="modal-title">Modal title</h4>
    //     </div>
        // <div className="modal-body"> */}
          <div className="profile-dd-container" onClick={(e) => e.stopPropagation()}>
            <div className="prof-dd-row prof-dd-title">Logged in as:</div>

            <div className="prof-dd-card pd-hov" onClick={(e) => toProfile(e)}>
          <img className="prof-dd-uimg" src={(user?.profile_picture ? user?.profile_picture : demoProfImage)} alt="" />
              <div
                className="prof-dd-card-content"

              >
                <p className="pd-text pd-name">{user?.username}</p>
                <p className="pd-text pd-acctype">Personal</p>
                <p className="pd-text pd-email">{user?.email}</p>
              </div>
              <img className="pd-checkmark" src={checkmark} alt="" />
            </div>
            {/* <br /> */}
            {/* <div className="prof-dd-row prof-dd-title">Your accounts</div>
            <div className="prof-dd-row pd-hov">
              <p>Add account</p>
            </div>
            <div className="prof-dd-row pd-hov">
              <p>Convert to business</p>
            </div> */}
            {/* <br /> */}
            <div className="prof-dd-row prof-dd-title">Options</div>
            <div className="prof-dd-row pd-hov">
              <p onClick={(e) => toSettings(e)}>Settings</p>
            </div>
            {/* <div className="prof-dd-row pd-hov">
              <p >Tune your home feed</p>
            </div>
            <div className="prof-dd-row pd-hov">
              <p>Install the Windows app</p>
            </div>
            <div className="prof-dd-row pd-hov">
              <p>Get help</p>
            </div>
            <div className="prof-dd-row pd-hov">
              <p>See terms and privacy</p>
            </div> */}
            <div className="prof-dd-row pd-hov" onClick={onLogout}>
              <p>Log out</p>
            </div>
          </div>
        {/* // </div>
        // <div className="modal-footer">
        //   <button onClick={props.onClose} className="button">
        //     Close
        //   </button>
        // </div>
    //   </div> */}
        </div>
  );
};

export default ProfileModal;
