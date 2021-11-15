// --------------------------- Defined Action Types as Constants ---------------------
const GET_SAVED = 'users/GET_SAVED';
const ADD_TO_SAVED = 'users/ADD_TO_SAVED';
const REMOVE_FROM_SAVED = 'users/REMOVE_FROM_SAVED';

// --------------------------- Defined Action Creator(s) --------------------------
const getSaved = (ink) => ({ type: GET_SAVED, ink });
const addSaved = (ink) => ({ type: ADD_TO_SAVED, ink });
const removeSaved = (ink) => ({ type: REMOVE_FROM_SAVED, ink });

// ---------------------------  Defined Thunk(s) --------------------------------

// create a new saved ink
export const addToSaved = (ink_id, user_id) => async (dispatch) => {

    const response = await fetch(`/api/users/${user_id}/saved-inks/${ink_id}/add`, {
        method: "POST"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addSaved(data));
    };
};

// create a new saved ink
export const removeFromSaved = (ink_id, user_id) => async (dispatch) => {

    const response = await fetch(`/api/users/${user_id}/saved-inks/${ink_id}/remove`, {
        method: "POST"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeSaved(data));
    };
};

// get all a users saved inks
export const getAllSaved= (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/saved-inks`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const saved_inks = data.saved_inks
        dispatch(getSaved(saved_inks));
        return response;
    }
}


// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// Image reducer
const savedInksReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case ADD_TO_SAVED:
            return [ ...newState, action.ink ]
        case REMOVE_FROM_SAVED:
            return newState.filter((el) => action.ink.id !== el.id)
        case GET_SAVED:
            return [ ...action.ink ]
        default:
            return state;
    }
}
// Export the reducer
export default savedInksReducer;
