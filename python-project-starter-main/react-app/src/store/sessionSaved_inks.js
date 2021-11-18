// --------------------------- Defined Action Types as Constants ---------------------
const GET_S_SAVED = 'users/GET_S_SAVED';
const ADD_TO_S_SAVED = 'users/ADD_TO_S_SAVED';
const REMOVE_FROM_S_SAVED = 'users/REMOVE_FROM_S_SAVED';

// --------------------------- Defined Action Creator(s) --------------------------
const getSessionSaved = (ink) => ({ type: GET_S_SAVED, ink });
const addSessionSaved = (ink) => ({ type: ADD_TO_S_SAVED, ink });
const removeSessionSaved = (ink) => ({ type: REMOVE_FROM_S_SAVED, ink });

// ---------------------------  Defined Thunk(s) --------------------------------

// create a new saved ink
export const addToSessionSaved = (ink_id, user_id) => async (dispatch) => {

    const response = await fetch(`/api/users/${user_id}/saved-inks/${ink_id}/add`, {
        method: "POST"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addSessionSaved(data));
    };
};

// create a new saved ink
export const removeFromSessionSaved = (ink_id, user_id) => async (dispatch) => {

    const response = await fetch(`/api/users/${user_id}/saved-inks/${ink_id}/remove`, {
        method: "POST"
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeSessionSaved(data));
    };
};

// get all a users saved inks
export const getAllSessionSaved= (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/saved-inks`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const saved_inks = data.saved_inks
        dispatch(getSessionSaved(saved_inks));
        return response;
    }
}


// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// sessionusers saved reducer
const sessionSavedInksReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case GET_S_SAVED:
            return [ ...action.ink ]
        case ADD_TO_S_SAVED:
            return [ ...newState, action.ink ]
        case REMOVE_FROM_S_SAVED:
            return newState.filter((el) => action.ink.id !== el.id)
        default:
            return state;
    }
}
// Export the reducer
export default sessionSavedInksReducer;
