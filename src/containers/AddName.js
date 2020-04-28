import Settings from "../components/Settings";
import { addName, setEditMode, pauseAllSpeakers } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  editMode: state.editMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (text) => dispatch(addName(text)),
    setEditMode: () => dispatch(setEditMode()),
    pauseAllSpeakers: () => dispatch(pauseAllSpeakers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
