import { SET_EDIT } from "../actions/types";
const editMode = (state = false, action) => {
  switch (action.type) {
    case SET_EDIT:
      return !state;
    default:
      return state;
  }
};
export default editMode;
