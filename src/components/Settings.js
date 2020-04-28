import React from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitEditMode = this.submitEditMode.bind(this);
  }
  submitEditMode() {
    const { setEditMode, pauseAllSpeakers } = this.props;
    setEditMode();
    pauseAllSpeakers();
  }
  render() {
    const { addName, editMode } = this.props;
    let input;
    return (
      <div className="Input-Div">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            addName(input.value);
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
          onClick={() => this.submitEditMode()}
          style={editMode ? { backgroundColor: "deepskyblue" } : {}}
        >
          <FaEdit />
        </button>
      </div>
    );
  }
}
Settings.propTypes = {
  editMode: PropTypes.bool.isRequired,
  addName: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  pauseAllSpeakers: PropTypes.func.isRequired,
};

export default Settings;
