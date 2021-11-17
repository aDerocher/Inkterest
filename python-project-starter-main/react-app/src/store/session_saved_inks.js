// --------------------------- Defined Action Types as Constants ---------------------
const GET_S_SAVED = 'users/GET_S_SAVED';

// --------------------------- Defined Action Creator(s) --------------------------
const getSessionSaved = (ink) => ({ type: GET_S_SAVED, ink });

// ---------------------------  Defined Thunk(s) --------------------------------

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


// Image reducer
const sessionSavedInksReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case GET_S_SAVED:
            return [ ...action.ink ]
        default:
            return state;
    }
}
// Export the reducer
export default sessionSavedInksReducer;
