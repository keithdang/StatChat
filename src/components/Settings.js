import React from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { MODES } from "../actions/types";
import SubSettingsContainer from "../containers/SubSettingsContainer";

class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitMode = this.submitMode.bind(this);
  }
  submitMode() {
    const { pauseAllSpeakers, setMode, mode } = this.props;
    if (mode === MODES.DEFAULT) {
      setMode(MODES.EDIT_TIME);
    } else {
      setMode(MODES.DEFAULT);
    }
    pauseAllSpeakers();
  }
  render() {
    const { addName, mode } = this.props;
    let input;
    return (
      <div>
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
            onClick={() => this.submitMode()}
            style={
              mode !== MODES.DEFAULT ? { backgroundColor: "deepskyblue" } : {}
            }
          >
            <FaEdit />
          </button>
        </div>
        {mode !== MODES.DEFAULT && <SubSettingsContainer />}
      </div>
    );
  }
}
Settings.propTypes = {
  mode: PropTypes.string.isRequired,
  addName: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  pauseAllSpeakers: PropTypes.func.isRequired,
};

export default Settings;
