import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, NavLink } from "react-router-dom";
import { createInk } from "../store/ink";
import { listUsersCanvases } from "../store/canvas";
import { getAllSaved } from "../store/saved_inks";
import "../styles/reset-styles.css";
import "../styles/new-ink.css";

function NewInkForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  // direct access to session user/slice of state
  const sessionUser = useSelector((state) => state.session.user);

  // direct access to canvases array/slice of state
  const canvases = useSelector((state) => state.canvases);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [destination_link, setDestination_link] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [select, setSelect] = useState(null);
  const [errors, setErrors] = useState([]);
  const [ errorsHidden, setErrorsHidden ] = useState(true);

  useEffect(() => {
    dispatch(listUsersCanvases(sessionUser?.id));

    let newErrors = [];
    if (title?.length < 2) {
        newErrors.push("Title must be longer than 2 characters");
    }
    if (title?.length > 50) {
        newErrors.push("Title length must be less than 50 characters");
    }
    setErrors(newErrors);
  }, [dispatch, title, sessionUser]);

  if (!sessionUser) return <Redirect to="/" />;

  const destLinkEdit = (val) => {
    if (val === "") return val

    if (!val.startsWith("https://www.")) return "https://www." + val
    else return val
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorsHidden(false)
    if(destination_link === "https://www."){
        setDestination_link(null)
    }
    const newImage = {
      image: selectedFile,
      title: title,
      subtitle: subtitle,
      destination_link: destLinkEdit(destination_link),
      canvas_id: select,
    };

    dispatch(createInk(newImage)).then(() => {
      setTitle("");
      setSubtitle("");
      setDestination_link("");
    });
    // dispatch(getAllSaved(sessionUser?.id))
    history.push(`/users/${sessionUser?.id}`);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDiscardBtn = (e) => {
    e.preventDefault();
    setSelectedFile(null);
  };

  // ========================================== COMPONENT

  return (
    <div className="container">
      <div className="form-container">
        <form
          className="new-ink-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-top">
            <div className="top-left">
              <NavLink to={`/users/${sessionUser?.id}`}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </NavLink>
            </div>
            <div className="top-right">
              <select
                id="canvas-list"
                onChange={(e) => setSelect(e.target.value)}
              >
                <option>Add to your canvas</option>
                {canvases?.length > 0 &&
                  canvases?.map((canvas) => {
                    return (
                      <option key={canvas.id} value={canvas.id}>
                        {canvas.name}
                      </option>
                    );
                  })}
              </select>
              <div className="canvas-selector">Canvas</div>
            </div>
          </div>

          <div className="form-bottom">
            <div className="bottom-left">
              <label for="file-input" className="file-input">
                {selectedFile ? (
                  <>
                    <img
                      className="preview-file"
                      src={URL.createObjectURL(selectedFile)}
                      alt="preview"
                    />
                    <button
                      className="preview-btn"
                      onClick={(e) => handleDiscardBtn(e)}
                    >
                      Discard
                    </button>
                  </>
                ) : (
                  <>
                    <div className="dotted-div">
                      <ion-icon
                        className="upload"
                        name="cloud-upload-outline"
                      ></ion-icon>
                      <div>Click to upload</div>
                    </div>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      onChange={updateImage}
                    />
                  </>
                )}
              </label>

              <button
                type="submit"
                className="file-upload-btn"
                disabled={(errors.length > 0 || !selectedFile)}
              >
                submit ink
              </button>
            </div>

            <div className="bottom-right">
              <input
                className="title input"
                type="text"
                value={title}
                maxLength="50"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add your title"
              />
            <div hidden={errorsHidden}>
              {errors && errors?.map((error, i) => {
                return <div className='title-error' key={i}>{error}</div>
              })}
            </div>

              <textarea
                className="subtitle input"
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Tell everyone what your ink is about"
              />
              <input
                className="destination input"
                type="text"
                value={destination_link}
                onChange={(e) => setDestination_link(e.target.value)}
                placeholder="Add a destination link"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewInkForm;
