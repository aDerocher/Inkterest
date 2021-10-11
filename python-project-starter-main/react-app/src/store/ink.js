// --------------------------- Defined Action Types as Constants ---------------------

const ADD_INK = 'users/NEW_INK';
const GET_INKS = 'users/GET_INKS';


// --------------------------- Defined Action Creator(s) --------------------------

const addInk = (ink) => ({ type: ADD_INK, ink });
const getInks = (inks) => ({ type: GET_INKS, inks });

// ---------------------------  Defined Thunk(s) --------------------------------

// create image
export const createInk = (newInk) => async (dispatch) => {
    const { image, title, subtitle, destination_link } = newInk;

    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("destination_link", destination_link);

    const response = await fetch('/api/inks/new-ink', {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addInk(data));
    };
};

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

// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// Image reducer
const inkReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case ADD_INK:
            return [ ...newState, action.ink ]
        case GET_INKS:
            return [ ...action.inks ]
        default:
            return state;
    }
}

// Export the reducer
export default inkReducer;
