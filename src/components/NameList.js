import React from "react";
import PropTypes from "prop-types";
import timeDisplay from "./TimeDisplay";
import EditTime from "./EditTime";
import { MODES } from "../actions/types";
import { FaArrowCircleLeft, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
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
  render() {
    const { namesList, mode, setTime, addTime, minusTime } = this.props;
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
            {mode === MODES.EDIT_TIME && (
              <EditTime
                id={name.id}
                setTime={setTime}
                icon={<FaArrowCircleLeft />}
              />
            )}
            {mode === MODES.ADD_TIME && (
              <EditTime
                id={name.id}
                setTime={addTime}
                icon={<FaPlusCircle />}
              />
            )}
            {mode === MODES.MINUS_TIME && (
              <EditTime
                id={name.id}
                setTime={minusTime}
                icon={<FaMinusCircle />}
              />
            )}
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
  minusTime: PropTypes.func.isRequired,
};

export default NameList;
