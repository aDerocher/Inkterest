import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { listAllCanvases, ink2Canvas } from '../store/canvas'
import { listAllInks } from '../store/ink'

function InkToCanvasForm() {
    const dispatch = useDispatch()
    // direct access to session user/slice of state
    // const sessionUser = useSelector(state => state.session.user);

    // direct access to inks array/slice of state
    const inks = useSelector(state => state.inks)

    // direct access to canvases array/slice of state
    const canvases = useSelector(state => state.canvases)


    const [selectCanvas, setSelectCanvas] = useState(null)
    const [selectInk, setSelectInk] = useState(null)
    const selectedCanvas = canvases?.filter((el) => el.name === selectCanvas)
    const selectedInk = inks?.filter((el) => el.title === selectInk)

    useEffect(() => {
        dispatch(listAllInks())
        dispatch(listAllCanvases())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            canvas_id: selectedCanvas[0].id,
            ink_id: selectedInk[0].id
        }
        dispatch(ink2Canvas(form))
    }

    return (
        <div className="test-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <select id='canvas-list' onChange={(e) => setSelectCanvas(e.target.value)}>
                    <option>Add to your canvas</option>
                    {canvases?.length > 0 && (
                        canvases?.map((canvas) => {
                            return <option key={canvas.id} value={canvas.name}>{canvas.name}</option>
                        })
                    )
                    }

                </select>
                <select id='canvas-list' onChange={(e) => setSelectInk(e.target.value)}>
                    <option>Select an ink</option>
                    {inks?.length > 0 && (
                        inks?.map((ink) => {
                            return <option key={ink.id} value={ink.title}>{ink.title}</option>
                        })
                    )
                    }

                </select>
                <button>add to this canvas</button>
            </form>
        </div>
    );
}

export default InkToCanvasForm;
