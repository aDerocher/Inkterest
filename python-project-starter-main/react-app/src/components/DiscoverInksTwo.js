import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllInks } from '../store/ink'
// need to write this backend request to add in usernames to the ink cards
    // import { listAllUsers } from '../store/users'
import "../styles/discover-inks-two.css";


// ======================================================
// ======================================================
// ======================================================
// ======================================================

// This is just a testing grounds page for rendering the inks on the 
// main page in the cool stratified way that pinterest does

// ======================================================
// ======================================================
// ======================================================
// ======================================================



function DiscoverInksTwo() {
    const dispatch = useDispatch();
    let count = 0;
    // direct access to session user/slice of state
    // const sessionUser = useSelector(state => state.session.user);

    // direct access to inks array/slice of state
    const inks = useSelector(state => state.inks)
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
    // put all the inks into the state
    // TODO:
    // see if you can filter these by users interest/categorical relationship
    useEffect(() => {
        dispatch(listAllInks())
    }, [dispatch])

    const upCount = () => {
        if (count >= 4){
            count = 0;
            return
        }
        count += 1
        return
    }

  return (
    <div className="discover-inks-two-container">
        { allCols.map((inkDivisionX) =>(
            <div className="column">
                {inkDivisionX?.map((i) => (
                    <div className={`tile c-${count} `} key={i.id}>
                        <p>div type: c-{count}</p>
                        {upCount()}
                    </div>
                ))}
            </div>
        ))}

        {/* <div className="column">
            {inkDivision1?.map((i) => (
                <div className={`tile c-${count+1} `} key={i.id}>
                    <p>div type: c-{count+1}</p>
                    {upCount()}
                </div>
            ))}
        </div>
        <div className="column">
            {inkDivision2?.map((i) => (
                <div className={`tile c-${count+2} `} key={i.id}>
                    <p>div type: c-{count+2}</p>
                    {upCount()}
                </div>
            ))}
        </div>
        <div className="column">
            {inkDivision2?.map((i) => (
                <div className={`tile c-${count+3} `} key={i.id}>
                    <p>div type: c-{count+3}</p>
                    {upCount()}
                </div>
            ))}
        </div>
        <div className="column">
            {inkDivision2?.map((i) => (
                <div className={`tile c-${count+4} `} key={i.id}>
                    <p>div type: c-{count+4}</p>
                    {upCount()}
                </div>
            ))}
        </div>
        <div className="column">
            {inkDivision2?.map((i) => (
                <div className={`tile c-${count} `} key={i.id}>
                    <p>div type: c-{count}</p>
                    {upCount()}
                </div>
            ))}
        </div>
        <div className="column">
            {inkDivision2?.map((i) => (
                <div className={`tile c-${count+1} `} key={i.id}>
                    <p>div type: c-{count+1}</p>
                    {upCount()}
                </div>
            ))}
        </div> */}
        
    </div>
  );
}

export default DiscoverInksTwo;
