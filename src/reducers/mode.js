import { MODES, SET_MODE } from "../actions/types";
const mode = (state = MODES.DEFAULT, action) => {
  switch (action.type) {
    case SET_MODE:
      return action.mode;
    default:
      return state;
  }
};
export default mode;
