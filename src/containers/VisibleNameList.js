import NameList from "../components/NameList";
import { setSpeaker, setTime } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  namesList: state.namesList,
  editMode: state.editMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeaker: (id, time) => dispatch(setSpeaker(id, time)),
    setTime: (id, time) => dispatch(setTime(id, time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
