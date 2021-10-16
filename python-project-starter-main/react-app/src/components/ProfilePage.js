import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/profile-page.css";

import CreateCanvasModal from "./CreateCanvasModal";
import FollowersModal from "./FollowersModal";
import FollowingsModal from "./FollowingsModal";
import { useParams } from "react-router-dom";
import { listOneUser } from "./../store/user";
import { listUsersCanvases } from "./../store/canvas";
import canvasCover from "./../images/squid-circle-icon-Black.png"
import DiscoverInks from "./DiscoverInks";

function ProfilePage() {

// ===== Initial declarations ===============================
  const params = useParams();
  const viewingUserId = params.userId;

  let history = useHistory();
  const dispatch = useDispatch();

  // options are for the new-ink/new-canvas dropdown menu
  const options = [
    {
      type: "group",
      name: "create",
      items: [
        { value: "ink", label: "Ink", className: "create-option" },
        { value: "canvas", label: "Canvas", className: "create-option" },
      ],
    },
  ];

// ===== State Assc Variables ===============================
  const [show, setShow] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);

  const viewUser = useSelector((state) => state.user[0]);
  const curUserCanvases = useSelector((state) => state.canvases);

  const redirect = () => {
    history.push("/profile-edit");
  };

  // ===== Functions ===============================
  const pinCreateHandler = (options) => {
    if (options.value === "ink") {
      history.push("/inks/new-ink");
    } else {
      setShow(true);
      const canvasDiv = document.querySelector('.Dropdown-placeholder')
      canvasDiv.setAttribute('hidden', 'true')
    }
  };

  const goToCanvasProfile = (e, canvas_id) => {
      e.preventDefault();
      history.push(`/canvases/${canvas_id}`)
  }

  const editCanvas = (e,c) => {
    e.preventDefault();
    history.push(`/canvases/${c.id}/edit-canvas`)
  }

  useEffect(() => {
    dispatch(listUsersCanvases(params.userId));
    dispatch(listOneUser(params.userId, 1))
  }, [dispatch, params]);


  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <span className="image-circle">
            <img src={viewUser?.profile_picture} alt="" />
          </span>
        </div>
        <div className="profile-name">
          <h1>
            {viewUser?.first_name} {viewUser?.last_name}
          </h1>
        </div>
        <div className="profile-contact">{viewUser?.email}</div>
        <div className="profile-follwer-follwing">
          {/* <p onClick={}>{user.followers.length} follower</p> */}
          <span onClick={() => setShowFollowers(true)}>
            {viewUser?.followers.length} follower
          </span>
          <FollowersModal
            onClose={() => setShowFollowers(false)}
            show={showFollowers}
          />
          <span> • </span>
          <span onClick={() => setShowFollowings(true)}>
            {viewUser?.followed?.length} following
          </span>
          <FollowingsModal
            onClose={() => setShowFollowings(false)}
            show={showFollowings}
          />
        </div>
      </div>
      <div className="profile-page-body">
        <div >
          <button className="profile-page-edit" onClick={redirect}><i className="fas fa-sliders-h"></i></button>
        </div>
        <div className="profile-page-upload">
          <CreateCanvasModal onClose={() => setShow(false)} show={show} />
          <Dropdown
            id="plus-btn"
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
            <div className="users-canvases-collection">

                {curUserCanvases?.map((c) => (
                    <div className="canvas-tile" key={c.id} onClick={e=>goToCanvasProfile(e,c.id)}>
                        <div className="canvas-tile-image-container" >

                            <div className="canvas-tile-image-lock" hidden={!c.private_canvas} >
                                <i className="fas fa-lock"></i>
                            </div>

                            <div onClick={e=>e.stopPropagation()}>
                                <button className="canvas-tile-image-pen" onClick={(e) => editCanvas(e,c)} >
                                    <i className="fas fa-pen"></i>
                                </button>
                            </div>

                            { c.inks[0] &&
                                <img className="canvas-tile-image" src={c.inks[0].image} alt="Canvas Cover"/>}
                            { !c.inks[0] &&
                                <img className="canvas-tile-image" src={canvasCover} alt="Canvas Cover"/>}

                        </div>
                        <div className="canvas-tile-footer">
                            <p>{c.name}</p>
                        </div>
                    </div>
              ))}
            </div>

      </div>
      <DiscoverInks user_id={viewingUserId}/>
    </div>
  );
}

export default ProfilePage;
