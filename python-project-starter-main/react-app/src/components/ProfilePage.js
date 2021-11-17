import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/profile-page.css";

import CreateCanvasModal from "./CreateCanvasModal";
import FollowersModal from "./FollowersModal";
import FollowingsModal from "./FollowingsModal";
import { useParams } from "react-router-dom";
import { listAllUsers, followUser, unfollowUser } from "./../store/user";
import { listUsersCanvases } from "./../store/canvas";
import { getAllSaved } from "./../store/saved_inks";
import canvasCover from "./../images/emptyCanvasCover.png"
import DiscoverInks from "./DiscoverInks";

function ProfilePage() {

// ===== Initial declarations ===============================
  const params = useParams();
  const viewingUserId = params.userId;

  let history = useHistory();
  const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const inks = useSelector((state) => state.inks);
    const saved_inks = useSelector((state) => state.saved_inks);

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
  const [isFollowing, setIsFollowing] = useState(null);

  const curUserCanvases = useSelector((state) => state.canvases);
  const users = useSelector((state) => state.user)
  const user = users.filter(user => user.id.toString() === params.userId)[0]


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

  const handleFollow = (e, userId) => {
    e.preventDefault()
    dispatch(followUser(userId))
    setIsFollowing(true)
  }

  const handleUnFollow = (e, userId) => {
    e.preventDefault()
    dispatch(unfollowUser(userId))
    setIsFollowing(false)
  }


  useEffect(() => {
      dispatch(listAllUsers())
      setIsFollowing(user?.followers.some((el) => el[1] === sessionUser?.id))
    }, [dispatch, user?.id]);

  useEffect(() => {
      dispatch(listUsersCanvases(params.userId));
    }, [dispatch]);

    useEffect(() => {
      dispatch(getAllSaved(params.userId))
    }, [dispatch, params.userId])

    const viewUser = useSelector((state) => state.user).filter(user => user.id.toString() === viewingUserId)[0]

return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <div className="profile-image">
          <span className="image-circle">
            <img className="users-profile-img" src={viewUser?.profile_picture} alt="" />
          </span>
        </div>
        <div className="profile-name">
          <h1>
            {viewUser?.first_name} {viewUser?.last_name}
          </h1>
        </div>
        <div className="profile-contact">{viewUser?.email}</div>
        <div className="profile-follwer-follwing">
          <span onClick={() => setShowFollowers(true)}>
            {viewUser?.followers.length} follower
          </span>
          <FollowersModal
            onClose={() => setShowFollowers(false)}
            show={showFollowers}
            isF={isFollowing}
            user={viewUser}
          />
          <span> • </span>
          <span onClick={() => setShowFollowings(true)}>
            {viewUser?.followed?.length} following
          </span>
          <FollowingsModal
            onClose={() => setShowFollowings(false)}
            show={showFollowings}
            isF={isFollowing}
            user={viewUser}
          />
        </div>
        {
          sessionUser &&
          sessionUser?.id !== user?.id &&
          (
            isFollowing
              ? <button className='unfollow-btn' onClick={(e) => handleUnFollow(e, user?.id)}>Unfollow</button>
              : <button className='follow-btn' onClick={(e) => handleFollow(e, user?.id)}>Follow</button>
          )
        }
        <button hidden={!(viewUser?.id === sessionUser.id)} className="profile-page-edit" onClick={redirect}><i className="fas fa-sliders-h"></i></button>
      </div>
      <div  className="profile-page-body">
        <div></div>
        <div hidden={!(viewUser?.id === sessionUser.id)} className="profile-page-upload">
          <CreateCanvasModal onClose={() => setShow(false)} show={show} />
          <Dropdown
            id="plus-btn"
            options={options}
            onChange={pinCreateHandler}
            placeholder="+"
            className="plus-dd"
            menuClassName="menu"
            controlClassName="control"
          />
        </div>
      </div>
      <div className="profile-page-collection">
          <div className='prof-title-divider'>
            <p>Canvases</p>
          </div>
            <div className="users-canvases-collection">
                {curUserCanvases?.map((c) => (
                    <div hidden={(c.creator_id !== sessionUser?.id) && c.private_canvas} className="canvas-tile" key={c.id} onClick={e=>goToCanvasProfile(e,c.id)}>
                        <div className="canvas-tile-image-container" >

                            <div className="canvas-tile-image-lock" hidden={!c.private_canvas} >
                                <i className="fas fa-lock"></i>
                            </div>

                            <div hidden={(c.creator_id !== sessionUser?.id)} onClick={e=>e.stopPropagation()}>
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
      <div className='prof-title-divider'>
            <p>Unorganized Inks</p>
        </div>
      <DiscoverInks canvasInksArr={saved_inks}/>
    </div>
  );
}

export default ProfilePage;
