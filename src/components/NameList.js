import React from "react";
import PropTypes from "prop-types";
import timeDisplay from "./TimeDisplay";
import EditTime from "./EditTime";
import { MODES } from "../actions/types";
import {
  FaArrowCircleLeft,
  FaPlusCircle,
  FaMinusCircle,
  FaTrashAlt,
  FaPencilAlt,
} from "react-icons/fa";
import "../App.css";

var t;
class NameList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentSpeakerTime: 0,
    };
    this.first = this.submitTime.bind(this);
    this.add = this.add.bind(this);
    this.timer = this.timer.bind(this);
    this.clearTimeFactors = this.clearTimeFactors.bind(this);
    this.renderEditMode = this.renderEditMode.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { mode } = this.props;
    if (mode !== prevProps.mode) {
      if (mode === MODES.DEFAULT) {
        this.clearTimeFactors();
      }
    }
  }
  submitTime(person) {
    const { setSpeaker } = this.props;
    setSpeaker(person.id, this.state.currentSpeakerTime);
    this.setState({
      currentSpeakerTime: person.speakingTime,
    });
    clearTimeout(t);
    if (person.isSpeaking) {
      this.timer();
    }
  }
  clearTimeFactors() {
    this.setState({
      currentSpeakerTime: 0,
    });
    clearTimeout(t);
  }
  add() {
    var newTime = this.state.currentSpeakerTime + 1;
    this.setState({
      currentSpeakerTime: newTime,
    });
    this.timer();
  }
  timer() {
    t = setTimeout(this.add, 1000);
  }
  renderEditMode(mode, id) {
    const { setTime, addTime, minusTime, deletePerson, editName } = this.props;
    switch (mode) {
      case MODES.EDIT_TIME:
        return (
          <EditTime
            id={id}
            mode={mode}
            setTime={setTime}
            icon={<FaArrowCircleLeft />}
          />
        );
      case MODES.ADD_TIME:
        return (
          <EditTime
            id={id}
            mode={mode}
            setTime={addTime}
            icon={<FaPlusCircle />}
          />
        );
      case MODES.MINUS_TIME:
        return (
          <EditTime
            id={id}
            mode={mode}
            setTime={minusTime}
            icon={<FaMinusCircle />}
          />
        );
      case MODES.EDIT_NAME:
        return (
          <EditTime
            id={id}
            mode={mode}
            setTime={editName}
            icon={<FaPencilAlt />}
          />
        );
      case MODES.DELETE_PERSON:
        return (
          <button className="Edit-Mode-Button" onClick={() => deletePerson(id)}>
            <FaTrashAlt />
          </button>
        );
      default:
        return;
    }
  }
  render() {
    const { namesList, mode } = this.props;
    return (
      <ul style={{ padding: 0 }}>
        {namesList.map((name) => (
          <li key={name.id} className="Name-List">
            <button
              className="listButton"
              style={name.isSpeaking ? { backgroundColor: "cadetblue" } : {}}
              key={name.id}
              disabled={mode !== MODES.DEFAULT}
              onClick={() => {
                this.submitTime(name);
              }}
            >
              {name.text}
            </button>
            <p className="Time-Display">
              {name.isSpeaking
                ? timeDisplay(this.state.currentSpeakerTime)
                : timeDisplay(name.speakingTime)}
            </p>
            {mode !== MODES.DEFAULT && this.renderEditMode(mode, name.id)}
          </li>
        ))}
      </ul>
    );
  }
}

NameList.propTypes = {
  namesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isSpeaking: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  mode: PropTypes.string.isRequired,
  setSpeaker: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  addTime: PropTypes.func.isRequired,
  editName: PropTypes.func.isRequired,
  minusTime: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

export default NameList;
