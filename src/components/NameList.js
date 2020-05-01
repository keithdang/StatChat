import React from "react";
import PropTypes from "prop-types";
import timeDisplay from "./TimeDisplay";
import EditForm from "./EditForm";
import { MODES } from "../actions/types";
import {
  FaArrowCircleLeft,
  FaPlusCircle,
  FaMinusCircle,
  FaTrashAlt,
  FaPencilAlt,
  FaPaintBrush,
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
    const {
      setTime,
      addTime,
      minusTime,
      changeColor,
      deletePerson,
      editName,
    } = this.props;
    switch (mode) {
      case MODES.EDIT_TIME:
        return (
          <EditForm
            id={id}
            mode={mode}
            modify={setTime}
            icon={<FaArrowCircleLeft />}
          />
        );
      case MODES.ADD_TIME:
        return (
          <EditForm
            id={id}
            mode={mode}
            modify={addTime}
            icon={<FaPlusCircle />}
          />
        );
      case MODES.MINUS_TIME:
        return (
          <EditForm
            id={id}
            mode={mode}
            modify={minusTime}
            icon={<FaMinusCircle />}
          />
        );
      case MODES.EDIT_NAME:
        return (
          <EditForm
            id={id}
            mode={mode}
            modify={editName}
            icon={<FaPencilAlt />}
          />
        );
      case MODES.DELETE_PERSON:
        return (
          <button className="Edit-Mode-Button" onClick={() => deletePerson(id)}>
            <FaTrashAlt />
          </button>
        );
      case MODES.CHANGE_COLOR:
        return (
          <button className="Edit-Mode-Button" onClick={() => changeColor(id)}>
            <FaPaintBrush />
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
        {namesList.map((person) => (
          <li key={person.id} className="Name-List">
            <button
              className="listButton"
              style={person.isSpeaking ? { backgroundColor: "cadetblue" } : {}}
              key={person.id}
              disabled={mode !== MODES.DEFAULT}
              onClick={() => {
                this.submitTime(person);
              }}
            >
              {person.name}
            </button>
            <p className="Time-Display">
              {person.isSpeaking
                ? timeDisplay(this.state.currentSpeakerTime)
                : timeDisplay(person.speakingTime)}
            </p>
            {mode !== MODES.DEFAULT && this.renderEditMode(mode, person.id)}
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
      name: PropTypes.string.isRequired,
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
  changeColor: PropTypes.func.isRequired,
};

export default NameList;
