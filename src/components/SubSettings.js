import React from "react";
import PropTypes from "prop-types";
import {
  FaEdit,
  FaPlus,
  FaMinus,
  FaClock,
  FaUserEdit,
  FaUserMinus,
} from "react-icons/fa";
import { MODES } from "../actions/types";

class SubSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modeOb: [
        {
          type: MODES.EDIT_TIME,
          color: "deepskyblue",
          icon: <FaClock />,
        },
        {
          type: MODES.ADD_TIME,
          color: "deepskyblue",
          icon: <FaPlus />,
        },
        {
          type: MODES.MINUS_TIME,
          color: "deepskyblue",
          icon: <FaMinus />,
        },
        {
          type: MODES.EDIT_NAME,
          color: "deepskyblue",
          icon: <FaUserEdit />,
        },
        {
          type: MODES.DELETE_PERSON,
          color: "deepskyblue",
          icon: <FaUserMinus />,
        },
      ],
    };

    this.renderButton = this.renderButton.bind(this);
  }
  renderButton(modeOb) {
    const { mode, setMode } = this.props;
    return (
      <button
        key={modeOb.type}
        className="Edit-Mode-Button"
        onClick={() => setMode(modeOb.type)}
        style={mode === modeOb.type ? { backgroundColor: modeOb.color } : {}}
      >
        {modeOb.icon}
      </button>
    );
  }
  render() {
    return (
      <div className="Input-Div">
        {this.state.modeOb.map((mode) => {
          return this.renderButton(mode);
        })}
      </div>
    );
  }
}
SubSettings.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
};

export default SubSettings;
