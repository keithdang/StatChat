import React from "react";
import PropTypes from "prop-types";
import { Popup } from "semantic-ui-react";
import {
  FaEdit,
  FaPlus,
  FaMinus,
  FaClock,
  FaUserEdit,
  FaUserMinus,
  FaPalette,
} from "react-icons/fa";
import { MODES } from "../actions/types";

class SubSettings extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modeOb: [
        {
          type: MODES.EDIT_TIME,
          color: "cornflowerblue",
          icon: <FaClock />,
          text: "Edit Time",
        },
        {
          type: MODES.ADD_TIME,
          color: "palegreen",
          icon: <FaPlus />,
          text: "Add Time",
        },
        {
          type: MODES.MINUS_TIME,
          color: "orange",
          icon: <FaMinus />,
          text: "Minus Time",
        },
        {
          type: MODES.EDIT_NAME,
          color: "yellow",
          icon: <FaUserEdit />,
          text: "Edit Name",
        },
        {
          type: MODES.DELETE_PERSON,
          color: "crimson",
          icon: <FaUserMinus />,
          text: "Delete",
        },
        {
          type: MODES.CHANGE_COLOR,
          color: "violet",
          icon: <FaPalette />,
          text: "Change Color",
        },
      ],
    };

    this.renderButton = this.renderButton.bind(this);
  }
  renderButton(modeOb) {
    const { mode, setMode } = this.props;
    return (
      <Popup
        content={
          <button key={modeOb.type} className="Mode-Popup">
            {modeOb.text}
          </button>
        }
        position="bottom center"
        style={{ fontSize: "small" }}
        trigger={
          <button
            key={modeOb.type}
            className="Edit-Mode-Button"
            onClick={() => setMode(modeOb.type)}
            style={
              mode === modeOb.type ? { backgroundColor: modeOb.color } : {}
            }
          >
            {modeOb.icon}
          </button>
        }
      />
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
