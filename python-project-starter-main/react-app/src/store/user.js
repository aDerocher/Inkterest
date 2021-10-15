// --------------------------- Defined Action Types as Constants ---------------------

const GET_USER = 'users/GET_USER';

// --------------------------- Defined Action Creator(s) --------------------------

const getUser = (user) => ({ type: GET_USER, user });

// ---------------------------  Defined Thunk(s) --------------------------------

// get one user
export const listOneUser = (userId) => async (dispatch) => {
    // NOTE: THIS ISN'T ACTUALLY THE USERID, THIS IS A INK ID MASKED AS THE USER ID
    const response = await fetch(`/api/users/${userId}`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch(getUser(data));
        return response;
    }
}

// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// Image reducer
const userReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case GET_USER:
            return [ action.user ]
        default:
            return state;
    }
}
// Export the reducer
export default userReducer;
