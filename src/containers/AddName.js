import React from "react";
import { connect } from "react-redux";
import { addName, setEditMode, pauseAllSpeakers } from "../actions";

const AddName = ({ dispatch }) => {
  let input;

  return (
    <div className="Input-Div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addName(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} className="Input-Box" />
        <button type="submit" className="addButton">
          Add Name
        </button>
      </form>
      <button
        className="Edit-Mode-Button"
        onClick={() => submitEditMode(dispatch)}
      >
        Edit
      </button>
    </div>
  );
};
function submitEditMode(dispatch) {
  dispatch(setEditMode());
  dispatch(pauseAllSpeakers());
}
export default connect()(AddName);
