import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllInks } from '../store/ink'
import { Redirect, useHistory } from "react-router";
import imgPlaceholder from "./../images/squid-circle-icon-Black.png"
import "../styles/discover-inks.css";

function DiscoverInks(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    // ==== Filter the inks state array for the inks created by the view user =============
    let inks = useSelector(state => state.inks);
    useEffect(() => {
        dispatch(listAllInks())
    }, [dispatch])
    if(props.user_id !== null && props.user_id !== undefined){
        // let newInks = []
        // for(let i=0; i < inks.length; i++){
        //     if (inks[i].creator_id.toString() === props.user_id){
        //         newInks.push(inks[i])
        //     }
        // }
        // inks = newInks
        inks = inks.filter(i => i.creator_id.toString() === props.user_id)
    }
    // ==== Or if component is passed an array, use that =============
    if(props.canvasInksArr !== null && props.canvasInksArr !== undefined){
        inks = props.canvasInksArr
    }


    const goToInkPage = (e,userId,inkId) => {
        e.preventDefault();
        history.push(`/users/${userId}/inks/${inkId}`)
    }
    const goToPage = () => {

    }
  return (
    <div className="discover-inks-container">
        {inks?.map((i) => (

            <div key={i.id} className='tile-container'>
                <div className="image-container"  onClick={e => goToInkPage(e,i.creator_id,i.id)} style={{
                            backgroundImage: `url(${i.image})`,
                            height: `100%`
                            }}>
                    {/* <a href={`/inks/${i.id}`}>link</a> */}
                    {!props.user_id &&
                        <div className="ink-tile-top-buttons">
                            <button className='ink-tile-btn ink-save-btn'>Save</button>
                        </div>
                    }

                    <img className='ink-tile-image' src={i.image} alt="" />

                    <div className="ink-tile-bottom-buttons" onClick={e => e.stopPropagation()}>
                        <div className='ink-tile-bottom-buttons-left'>
                            <a target="_blank" rel="noreferrer" href={i.destination_link}>
                            {i.destination_link &&
                                <button className='ink-tile-btn ink-dest-link-btn'>etsyisthegreatest.com</button>
                            }
                            </a>
                        </div>

                        {/* <button className='ink-tile-btn ink-dest-link-btn'>etsyisthegreatest.com</button> */}
                        <div className='ink-tile-bottom-buttons-right'>
                            <button className='ink-tile-btn ink-tile-btn-s'>&#8683;</button>
                            <button className='ink-tile-btn ink-tile-btn-s'>...</button>
                        </div>
                    </div>
                </div>
                {!props.user_id &&
                    <div className="tile-footer">
                        <img className='user-image' src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />
                        <p className="username"><a href={`/users/${i.creator_id}`}>{i.creator_username}</a></p>
                    </div>
                }
            </div>

        ))}
    </div>
  );
}

export default DiscoverInks;
