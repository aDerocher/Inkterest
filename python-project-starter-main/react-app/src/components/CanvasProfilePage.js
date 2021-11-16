import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCanvas } from "./../store/canvas";
import DiscoverInks from "./DiscoverInks";
import "../styles/canvas-profile-page.css";

function CanvasProfilePage() {
    const params = useParams();
    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneCanvas(params.canvas_id));
    }, [dispatch, params]);

    const sessionUser = useSelector(state => state.session.user);

    const curCanvas = useSelector((state) => state.canvases[0]);
    const canvasInksArr = curCanvas?.inks;

    const editCanvas = (e) => {
        e.preventDefault();
        history.push(`/canvases/${curCanvas.id}/edit-canvas`)
    }


  return (
    <div className="canvas-p-profile-page-container">
      <div className="canvas-p-profile-page-header">

        <div className="canvas-p-profile-name">
          <h1>{curCanvas?.name}</h1>
        </div>
        {/* <div className="three-canvas-options">
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-star"></i></button>
                <p className="option-label">More Ideas</p>
            </div>
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-th"></i></button>
                <p className="option-label">Organize</p>
            </div>
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-align-left"></i></button>
                <p className="option-label">Notes</p>
            </div>
        </div> */}
      </div>
      <div className="canvas-p-profile-page-body">

      {
        curCanvas?.creator_id === sessionUser?.id &&
        <div className="canvas-p-profile-page-edit">
            <button onClick={e => editCanvas(e)}><i className="fas fa-sliders-h"></i></button>
        </div>
      }

      </div>
      <div className="canvas-p-profile-page-collection">

      </div>
        <DiscoverInks user_id={null} canvasInksArr={canvasInksArr} canvas_id={curCanvas?.id}/>
        {/* <button className='floaty-button help-btn'>?</button>
        <button className='floaty-button big-plus-btn'>+</button> */}
    </div>
  );
}

export default CanvasProfilePage;
