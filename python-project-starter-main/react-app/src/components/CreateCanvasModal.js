import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { listAllCanvases, removeCanvas } from '../store/canvas'
import "../styles/create-canvas-modal.css";


function CreateCanvasModal() {
    // const history = useHistory();
    const dispatch = useDispatch();

    return (
    <div className="modal cc-modal">
        <h2>This is the canvas form</h2>
    </div>
  );
}

export default CreateCanvasModal;