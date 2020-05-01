import Settings from "../components/Settings";
import { addName, pauseAllSpeakers, setMode } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(addName(name)),
    setMode: (mode) => dispatch(setMode(mode)),
    pauseAllSpeakers: () => dispatch(pauseAllSpeakers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
