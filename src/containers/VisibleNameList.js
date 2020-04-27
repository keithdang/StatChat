// import React from "react";
import NameList from "../components/NameList";
import { setSpeaker } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  namesList: state.namesList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeaker: (id, time) => dispatch(setSpeaker(id, time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameList);
