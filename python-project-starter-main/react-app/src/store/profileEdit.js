// --------------------------- Defined Action Types as Constants ---------------------
const EDIT_PROFILE = "users/EDIT_PROFILE";

// --------------------------- Defined Action Creator(s) --------------------------
const editProfile = (profile) => ({ type: EDIT_PROFILE, profile });

// ---------------------------  Defined Thunk(s) --------------------------------
//edit profile
export const changeProfile = (profile, userId) => async (dispatch) => {
  const { firstName, lastName, email, userName } = profile;

  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("userName", userName);

  const response = await fetch(`/api/users/${userId}/edit`, {
    method: "PATCH",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(editProfile(data));
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
