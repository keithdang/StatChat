import SubSettings from "../components/SubSettings";
import { setMode } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  mode: state.mode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMode: (mode) => dispatch(setMode(mode)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubSettings);
