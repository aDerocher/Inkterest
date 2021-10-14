// const GET_FOLLOWERS = "users/GET_FOLLOWERS";
// const GET_FOLLOWEDS = "users/GET_FOLLOWEDS";
// const getFollowers = (followers) => ({ type: GET_FOLLOWERS, followers });
// const getFolloweds = (followeds) => ({ type: GET_FOLLOWEDS, followeds });

// // get followers
// export const listAllFollowers = () => async (dispatch) => {
//   const response = await fetch(`/api/follows/followers`, {
//     method: "GET",
//   });
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getFollowers(data));
//     return response;
//     }
// };

// // get followeds
// export const listAllFolloweds = () => async (dispatch) => {
//   const response = await fetch(`/api/follows/followeds`, {
//     method: "GET",
//   });
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getFolloweds(data));
//     return response;
//   }
// };

// // STATE AND REDUCER

// const initialState = {

// };

// const followReduces = (state = initialState, action) => {
//   const newState = Object.assign({}, state);
//   switch (action.type) {
//     case GET_FOLLOWERS:
//       newState["followers"] = action.followers;
//       return newState
//     case GET_FOLLOWEDS:
//       newState["followeds"] = action.followeds;
//       return newState
//       default:
//       return state;
//   }
// };

// export default followReduces;
