// --------------------------- Defined Action Types as Constants ---------------------

const GET_INK = 'users/GET_INK';

// --------------------------- Defined Action Creator(s) --------------------------

const getInk = (ink) => ({ type: GET_INK, ink });

// ---------------------------  Defined Thunk(s) --------------------------------

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
// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = {};


// Image reducer
const inkReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_INK:
            return action.ink
        default:
            return state;
    }
}
// Export the reducer
export default inkReducer;
