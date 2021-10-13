import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { listAllCanvases, removeCanvas } from '../store/canvas'
import "../styles/canvas-list.css";

function CanvasList() {
    // const history = useHistory();
    const dispatch = useDispatch();

    // direct access to session user/slice of state
    const sessionUser = useSelector(state => state.session.user);
    // direct access to inks array/slice of state
    const canvases = useSelector(state => state.canvases)
    console.log(canvases)

    // put all the canvases into the state
    // TODO: filter by user Id
    useEffect(() => {
        dispatch(listAllCanvases())
    }, [dispatch])

    // Delete a given canvas
    const deleteCanvas = (e, canv_id) => {
        e.preventDefault()
        dispatch(removeCanvas(canv_id))
    }

  return (
    <div className="canvas-list-container">
        {canvases?.map((c) => (
            <div id={c.id}>
                <p>{c.name}</p>
                <p>{c.id}</p>
                {sessionUser.id === c.creator_id && 
                    <button onClick={e=>deleteCanvas(e, c.id)}>Delete canvas #{c.id}</button>
                }
            </div>
        ))}
    </div>
  );
}

export default CanvasList;