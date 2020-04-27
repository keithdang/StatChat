import React from "react";
import { connect } from "react-redux";
import { addName } from "../actions";

const AddName = ({ dispatch }) => {
  let input;

  return (
    <div>
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
        <input
          ref={(node) => (input = node)}
          style={{ height: "20px", padding: "5px", fontSize: "medium" }}
        />
        <button type="submit" className="addButton">
          Add Name
        </button>
      </form>
    </div>
  );
};

export default connect()(AddName);
