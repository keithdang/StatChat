import React from "react";
import { MODES } from "../actions/types";
import "../App.css";

class EditForm extends React.Component {
  render() {
    const { modify, id, icon, mode } = this.props;
    let input;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          if (mode === MODES.EDIT_NAME) {
            modify(id, input.value);
          } else {
            modify(id, parseInt(input.value));
          }
          input.value = "";
        }}
      >
        <button type="submit" className="Edit-Time-Button">
          {icon}
        </button>
        <input ref={(node) => (input = node)} className="Edit-Time-Input-Box" />
      </form>
    );
  }
}

export default EditForm;
