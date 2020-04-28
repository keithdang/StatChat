import { combineReducers } from "redux";
import namesList from "./namesList";
import editMode from "./editMode";
export default combineReducers({
  namesList,
  editMode,
});
