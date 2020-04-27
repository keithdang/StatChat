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
    this.first = this.first.bind(this);
    this.add = this.add.bind(this);
    this.timer = this.timer.bind(this);
  }
  first(person) {
    this.setState({
      currentSpeakerTime: person.speakingTime,
    });
    clearTimeout(t);
    if (person.isSpeaking) {
      this.timer();
    }
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
    const { namesList, setSpeaker } = this.props;

    return (
      <ul style={{ padding: 0 }}>
        {namesList.map((name) => (
          <li key={name.id} style={{ display: "flex", padding: "5px" }}>
            <button
              className="listButton"
              style={name.isSpeaking ? { backgroundColor: "cadetblue" } : {}}
              key={name.id}
              onClick={() => {
                setSpeaker(name.id, this.state.currentSpeakerTime);
                this.first(name);
              }}
            >
              {name.text}
            </button>
            <p style={{ margin: "0px", marginLeft: "10px" }}>
              {name.isSpeaking
                ? timeDisplay(this.state.currentSpeakerTime)
                : timeDisplay(name.speakingTime)}
            </p>
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
  setSpeaker: PropTypes.func.isRequired,
};
export default NameList;
