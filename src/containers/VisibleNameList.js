import NameList from "../components/NameList";
import {
  setSpeaker,
  setTime,
  addTime,
  minusTime,
  deletePerson,
  editName,
  changeColor,
} from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  namesList: state.namesList,
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeaker: (id, time) => dispatch(setSpeaker(id, time)),
    setTime: (id, time) => dispatch(setTime(id, time)),
    addTime: (id, time) => dispatch(addTime(id, time)),
    changeColor: (id) => dispatch(changeColor(id)),
    minusTime: (id, time) => dispatch(minusTime(id, time)),
    editName: (id, name) => dispatch(editName(id, name)),
    deletePerson: (id) => dispatch(deletePerson(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
