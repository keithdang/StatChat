import SubSettings from "../components/SubSettings";
import { addName, pauseAllSpeakers, setMode } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // addName: (text) => dispatch(addName(text)),
    setMode: (mode) => dispatch(setMode(mode)),
    // pauseAllSpeakers: () => dispatch(pauseAllSpeakers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubSettings);
