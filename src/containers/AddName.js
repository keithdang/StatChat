import Settings from "../components/Settings";
import { addName, pauseAllSpeakers, setMode } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (text) => dispatch(addName(text)),
    // setmode: (mode) => dispatch(setmode(mode)),
    setMode: (mode) => dispatch(setMode(mode)),
    pauseAllSpeakers: () => dispatch(pauseAllSpeakers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
