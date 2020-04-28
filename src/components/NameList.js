import React from "react";
import PropTypes from "prop-types";
import timeDisplay from "./TimeDisplay";
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
    this.renderEditTime = this.renderEditTime.bind(this);
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
  renderEditTime(name) {
    const { setTime } = this.props;
    let input;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          setTime(name.id, parseInt(input.value));
          this.clearTimeFactors();
          input.value = "";
        }}
      >
        <button type="submit" className="Edit-Time-Button">
          Change
        </button>
        <input ref={(node) => (input = node)} className="Edit-Time-Input-Box" />
      </form>
    );
  }
  render() {
    const { namesList, editMode } = this.props;
    return (
      <ul style={{ padding: 0 }}>
        {namesList.map((name) => (
          <li key={name.id} className="Name-List">
            <button
              className="listButton"
              style={name.isSpeaking ? { backgroundColor: "cadetblue" } : {}}
              key={name.id}
              disabled={editMode}
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
            {editMode && this.renderEditTime(name)}
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
  editMode: PropTypes.bool.isRequired,
  setSpeaker: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};
export default NameList;
