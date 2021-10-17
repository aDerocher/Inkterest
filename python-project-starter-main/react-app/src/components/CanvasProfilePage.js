import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCanvas } from "./../store/canvas";
import { listAllMyInks } from "./../store/ink"
import "../styles/canvas-profile-page.css";

function CanvasProfilePage() {
    const params = useParams();
    let history = useHistory();
    const dispatch = useDispatch();

    const canvas = useSelector((state) => state.canvases[0]);
    const inks = useSelector((state) => state.inks);

    useEffect(() => {
        dispatch(getOneCanvas(params.canvas_id));
        dispatch(listAllMyInks());
    }, [dispatch, params]);


    const editCanvas = (e) => {
        e.preventDefault();
        history.push(`/canvases/${canvas.id}/edit-canvas`)
    }

    const handleInkClick = (e, inkId, userId) => {
      e.preventDefault();
      history.push(`/users/${userId}/inks/${inkId}`)
    }


  return (
    <div className="canvas-p-profile-page-container">
      <div className="canvas-p-profile-page-header">

        <div className="canvas-p-profile-name">
          <h1>{canvas?.name}</h1>
        </div>
        <div className="three-canvas-options">
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
        </div>
      </div>

      <div className="canvas-p-profile-page-body">
        <div className='canvas-tile-image-container'>
            {
              canvas?.inks.map((ink) => {
                return <img className='canvas-tile-image' src={ink.image} onClick={(e) => handleInkClick(e, ink.id, ink.creator_id)}/>
              })
            }
        </div>

        <div className="canvas-p-profile-page-edit">
            <button onClick={e => editCanvas(e)}><i className="fas fa-sliders-h"></i></button>
        </div>

      </div>
        <div className="canvas-p-profile-page-collection"></div>
        <button className='floaty-button help-btn'>?</button>
        <button className='floaty-button big-plus-btn'>+</button>
    </div>
  );
}

export default CanvasProfilePage;
