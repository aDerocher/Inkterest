// --------------------------- Defined Action Types as Constants ---------------------

const ADD_CANVAS = 'users/NEW_CANVAS';
const GET_CANVASES = 'users/GET_CANVASES';
const GET_USERS_CANVASES = 'users/GET_USERS_CANVASES';
const DELETE_CANVAS = 'users/DELETE_CANVAS';


// --------------------------- Defined Action Creator(s) --------------------------

const addCanvas = (canvas) => ({ type: ADD_CANVAS, canvas });
const getCanvases = (canvases) => ({ type: GET_CANVASES, canvases });
const getUsersCanvases = (usersCanvases) => ({ type: GET_USERS_CANVASES, usersCanvases });
const deleteCanvas = (canvas) => ({ type: DELETE_CANVAS, canvas });

// ---------------------------  Defined Thunk(s) --------------------------------

// create canvas
export const createCanvas = (newCanvas) => async (dispatch) => {
    const { name, private_canvas } = newCanvas;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("private_canvas", private_canvas);

    const response = await fetch('/api/canvases/new-canvas', {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addCanvas(data));
    };
};

// get all canvases
export const listAllCanvases = () => async (dispatch) => {
    const response = await fetch(`/api/canvases`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const canvases = data.canvases
        dispatch(getCanvases(canvases));
        return response;
    }
}

// get a users canvases
export const listUsersCanvases = (userId) => async (dispatch) => {
    const response = await fetch(`/api/canvases/users/${userId}`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();

        const usersCanvases = data.usersCanvases
        dispatch(getUsersCanvases(usersCanvases));
        return response;
    }
}

// delete canvas
export const removeCanvas = (canvasId) => async (dispatch) => {
    const response = await fetch(`/api/canvases/${canvasId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deleteCanvas(data));
    }
}


// ---------------------------  State & Reducer --------------------------------


// Image state
const initialState = [];


// Image reducer
const canvasReducer = (state = initialState, action) => {
    let newState = [ ...state ]
    switch (action.type) {
        case ADD_CANVAS:
            return [ ...newState, action.canvas ]
        case GET_CANVASES:
            return [ ...action.canvases ]
        case GET_USERS_CANVASES:
            return [ ...newState, action.usersCanvases ]
        case DELETE_CANVAS:
            return newState.filter((el) => action.canvas.id !== el.id)
        default:
            return state;
    }
}

// Export the reducer
export default canvasReducer;
