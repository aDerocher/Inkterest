// --------------------------- Defined Action Types as Constants ---------------------

const GET_USER = 'users/GET_USER';
const FOLLOW_USER = 'users/FOLLOW_USER';
const UNFOLLOW_USER = 'users/UNFOLLOW_USER';

// --------------------------- Defined Action Creator(s) --------------------------

const getUser = (user) => ({ type: GET_USER, user });
const follow = (user) => ({ type: FOLLOW_USER, user });
const unfollow = (user) => ({ type: UNFOLLOW_USER, user });

// ---------------------------  Defined Thunk(s) --------------------------------

// get one user
export const listOneUser = (inkId) => async (dispatch) => {
    // NOTE: THIS ISN'T ACTUALLY THE USERID, THIS IS AN INK ID
    const response = await fetch(`/api/users/${inkId}`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch(getUser(data));
        return response;
    }
}

// follow one user
export const followUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/follow`, {
        method: 'POST'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(follow(data));
        return response;
    }
}

// unfollow one user
export const unfollowUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/unfollow`, {
        method: 'POST'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(unfollow(data));
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
        case FOLLOW_USER:
            return [ action.user ]
        case UNFOLLOW_USER:
            return [ action.user ]
        default:
            return state;
    }
}
// Export the reducer
export default userReducer;
