import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listAllInks } from '../store/ink'
import { listAllUsers } from '../store/user'
import { useHistory } from "react-router";
import "../styles/discover-inks.css";
import { inkOffCanvas } from "../store/canvas";
import { getAllSaved, updateState } from "../store/saved_inks";
import { addToSessionSaved, removeFromSessionSaved, getAllSessionSaved } from "../store/sessionSaved_inks";
import demoProfImage from "./../images/prof-Img_defaultSquid.png";

function DiscoverInks(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    // ==== Filter the inks state array for the inks created by the view user =============
    let inks = useSelector(state => state.inks);
    const sessionUser = useSelector(state => state.session.user)
    // const discoverInks = inks.filter((ink) => ink.creator_id !== sessionUser?.id)
    const saved_inks = useSelector(state => state.saved_inks)
    const session_saved_inks = useSelector(state => state.session_saved_inks)
    const users = useSelector(state => state.user)

    useEffect(() => {
        dispatch(listAllInks())
        dispatch(listAllUsers())
    }, [dispatch])

    useEffect(() => {
            dispatch(getAllSaved(params.userId));
            dispatch(getAllSessionSaved(sessionUser?.id));
    }, [dispatch, sessionUser?.id])

    // ==== If component is passed a user ID, filter all inks =============
    if(props.user_id !== null && props.user_id !== undefined){
        inks = inks.filter(i => i.creator_id.toString() === props.user_id)
    }
    // ==== Or if component is passed an array, use that =============
    if(props.canvasInksArr !== null && props.canvasInksArr !== undefined){
        // ==== If this is the home screen, dont show active users inks =============
        inks = props.canvasInksArr
    }

    if(props.home === true){
        let saved_ids = saved_inks?.map((i) => {
            return i.id
        })
        inks = inks.filter((i) => {
            return saved_ids.includes(i.id) === false
        })
    }


    const handleSaveInk = (e, ink) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToSessionSaved(ink.id, sessionUser.id))
    }

    const handleUnsaveInk = (e, ink) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeFromSessionSaved(ink.id, sessionUser.id))
        console.log(+params.userId)
        if (sessionUser?.id === +params.userId) dispatch(updateState(ink))
    }

    const goToInkPage = (e,userId,inkId) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/users/${userId}/inks/${inkId}`)
    }
    const removeFromCanvas = (e, canvas_id, ink_id) => {
        e.preventDefault();
        const form = {
            canvas_id: canvas_id,
            ink_id: ink_id
        }
        dispatch(inkOffCanvas(form))
        let rInk = document.getElementById(ink_id)
        rInk.setAttribute("class", "hidden-ink")
        history.push(`/canvases/${canvas_id}`)
    }

    // magical bit that enables magic rendering ===================
    let inkDivision0 = []
    let inkDivision1 = []
    let inkDivision2 = []
    let inkDivision3 = []
    let inkDivision4 = []
    let inkDivision5 = []
    let inkDivision6 = []

    for(let i=0; i<inks?.length; i++){
        let x = i % 7
        switch (x) {
            case 0:
                inkDivision0.push(inks[i])
                break;
            case 1:
                inkDivision1.push(inks[i])
                break;
            case 2:
                inkDivision2.push(inks[i])
                break;
            case 3:
                inkDivision3.push(inks[i])
                break;
            case 4:
                inkDivision4.push(inks[i])
                break;
            case 5:
                inkDivision5.push(inks[i])
                break;
            case 6:
                inkDivision6.push(inks[i])
                break;
            default:
                break;
        }
    }
    const allCols = [
        inkDivision0,
        inkDivision1,
        inkDivision2,
        inkDivision3,
        inkDivision4,
        inkDivision5,
        inkDivision6,
    ];

  return (
    <div className="discover-inks-container">

        {/* ====================================================================== */}
        {/* ====== This is the start of rendering the first column of inks ======= */}

        { allCols?.map((inkDivisionX, i) =>(
            <div key={i} className="column-of-inks">
                {inkDivisionX?.map((i) => (
                    // ====== This is the start of rendering an individual ink tile =======
                    <div key={i.id} id={i.id} className='tile-container'>
                        <div className="image-container"  onClick={e => goToInkPage(e,i.creator_id,i.id)} style={{
                                backgroundImage: `url(${i.image})`,
                                height: `100%`
                                }}>
                            {!props.user_id &&
                                <div className="ink-tile-top-buttons">
                                    {
                                        session_saved_inks?.some((el) => el.id === i.id)
                                        ? <button className='ink-tile-btn ink-save-btn' onClick={e=> handleUnsaveInk(e, i)}>Unsave</button>
                                        : <button className='ink-tile-btn ink-save-btn' onClick={e=> handleSaveInk(e, i)}>Save</button>
                                    }
                                </div>
                            }

                            <img className='ink-tile-image' src={i.image} alt="" />

                            <div className="ink-tile-bottom-buttons" onClick={e => e.stopPropagation()}>
                                <div className='ink-tile-bottom-buttons-left'>
                                    <a target="_blank" rel="noreferrer" href={i.destination_link}>
                                    {i.destination_link &&
                                            <button className='ink-dest-link-btn'>{i.destination_link}</button>
                                    }
                                    </a>
                                </div>

                                {/* <div className='ink-tile-bottom-buttons-right'>
                                    <button className='ink-tile-btn ink-tile-btn-s'>&#8683;</button>
                                    <button className='ink-tile-btn ink-tile-btn-s'>...</button>
                                </div> */}
                                {props.canvas_id &&
                                    <button className='ink-tile-btn ink-tile-btn-s' onClick={e=>removeFromCanvas(e,props.canvas_id, i.id)}>X</button>
                                }
                            </div>
                        </div>
                        {!props.user_id &&
                            <div className="tile-footer">
                                {
                                    users?.map((user) => {
                                        if (user.id === i.creator_id) {
                                            return <img key={user.id} className='user-image' src={(user.profile_picture ? user.profile_picture : demoProfImage)} alt="" />
                                        }
                                    })
                                }
                                <p className="username"><a href={`/users/${i.creator_id}`}>{i.creator_username}</a></p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        ))}
    </div>
  );
}

export default DiscoverInks;
