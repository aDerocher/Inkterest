// --------------------------- Defined Action Types as Constants ---------------------

const ADD_INK = 'users/NEW_INK';
const GET_INK = 'users/GET_INK';
const GET_INKS = 'users/GET_INKS';
const EDIT_INK = 'users/GET_INK';
const DELETE_INK = 'users/DELETE_INK';


// --------------------------- Defined Action Creator(s) --------------------------

const addInk = (ink) => ({ type: ADD_INK, ink });
const getInk = (ink) => ({ type: GET_INK, ink });
const getInks = (inks) => ({ type: GET_INKS, inks });
const editInk = (ink) => ({ type: EDIT_INK, ink });
const deleteInk = (ink) => ({ type: DELETE_INK, ink });

// ---------------------------  Defined Thunk(s) --------------------------------

// create image
export const createInk = (newInk) => async (dispatch) => {
    const { image, title, subtitle, destination_link, canvas_id } = newInk;

    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("destination_link", destination_link);
    formData.append("canvas_id", canvas_id);

    const response = await fetch('/api/inks/new-ink', {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addInk(data));
    };
};

// get one ink
export const listOneInk = (inkId) => async (dispatch) => {
    const response = await fetch(`/api/inks/${inkId}`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const ink = data
        dispatch(getInk(ink));
        return response;
    }
}

// get all inks
export const listAllInks = () => async (dispatch) => {
    const response = await fetch(`/api/inks`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const inks = data.inks
        dispatch(getInks(inks));
        return response;
    }
}

// edit ink
export const changeInk = (ink, inkId) => async (dispatch) => {
    const { title, subtitle, destination_link } = ink;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("destination_link", destination_link);

    const response = await fetch(`/api/inks/${inkId}/edit`, {
        method: "PATCH",
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(editInk(data));
    };
};

// delete ink
export const removeInk = (inkId) => async (dispatch) => {
    const response = await fetch(`/api/inks/${inkId}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const inks = await response.json();
        dispatch(deleteInk(inks));
    }
}


// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// Image reducer
const inksReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case ADD_INK:
            return [ ...newState, action.ink ]
        case GET_INK:
            return [ action.ink ]
        case GET_INKS:
            return [ ...action.inks ]
        case EDIT_INK:
            return newState
        case DELETE_INK:
            return newState.filter((el) => action.ink.id !== el.id)
        default:
            return state;
    }
}
// Export the reducer
export default inksReducer;
