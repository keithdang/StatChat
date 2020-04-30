import { MODES, SET_MODE } from "../actions/types";
const mode = (state = MODES.DEFAULT, action) => {
  switch (action.type) {
    case SET_MODE:
      switch (action.mode) {
        case MODES.EDIT_NAME:
          return MODES.EDIT_NAME;
        case MODES.DEFAULT:
          return MODES.DEFAULT;
        default:
          return MODES.DEFAULT;
      }
    default:
      return state;
  }
};
export default mode;
