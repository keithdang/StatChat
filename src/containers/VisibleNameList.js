import NameList from "../components/NameList";
import { setSpeaker, setTime, addTime, minusTime } from "../actions/index";
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
    minusTime: (id, time) => dispatch(minusTime(id, time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
