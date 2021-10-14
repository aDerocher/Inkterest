// --------------------------- Defined Action Types as Constants ---------------------
const EDIT_PROFILE = "users/EDIT_PROFILE";

// --------------------------- Defined Action Creator(s) --------------------------
const editProfile = (profile) => ({ type: EDIT_PROFILE, profile });

// ---------------------------  Defined Thunk(s) --------------------------------
//edit profile
export const changeProfile = (profile, userId) => async (dispatch) => {
  const { first_name, last_name, email, username } = profile;

  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("email", email);
  formData.append("username", username);

  const response = await fetch(`/api/users/${userId}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (response.ok) {
    console.log("if response ok");
    const data = await response.json();
    dispatch(editProfile(data));
  } else {
    return ["An error occurred. Please try again."];
  }
};

// ---------------------------  State & Reducer --------------------------------

// Profile state
const initialState = [];

const profileReduces = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case EDIT_PROFILE:
      return newState;
    default:
      return state;
  }
};

export default profileReduces;
