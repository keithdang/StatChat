import React from "react";
import { connect } from "react-redux";
import { setTime } from "../actions";
import { FaArrowCircleLeft } from "react-icons/fa";
import "../App.css";
class EditTime extends React.Component {
  render() {
    const { setTime, id } = this.props;
    let input;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          setTime(id, parseInt(input.value));
          input.value = "";
        }}
      >
        <button type="submit" className="Edit-Time-Button">
          <FaArrowCircleLeft />
        </button>
        <input ref={(node) => (input = node)} className="Edit-Time-Input-Box" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTime: (id, value) => dispatch(setTime(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(EditTime);
