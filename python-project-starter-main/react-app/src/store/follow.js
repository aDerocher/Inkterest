const GET_FOLLOWERS = "users/GET_FOLLOWERS";
const GET_FOLLOWEDS = "users/GET_FOLLOWEDS";
const getFollowers = (followers) => ({ type: GET_FOLLOWERS, followers });
const getFolloweds = (followeds) => ({ type: GET_FOLLOWEDS, followeds });

// get follow
export const listAllFollows = () => async (dispatch) => {
  const response = await fetch(`/api/follows`, {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    const followers = data.followers;
    const followeds = data.followeds;
    dispatch(getFollowers(followers));
    dispatch(getFolloweds(followeds));
    return response;
  }
};

// STATE AND REDUCER

const initialState = {};

const followReduces = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_FOLLOWERS:
      return newState["followers"] = action.followers;
    case GET_FOLLOWEDS:
      return newState["followeds"] = action.followeds;
    default:
      return state;
  }
};

export default followReduces;
