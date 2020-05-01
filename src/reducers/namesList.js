import {
  ADD_NAME,
  ADD_TIME,
  EDIT_NAME,
  MINUS_TIME,
  SET_SPEAKER,
  SET_TIME,
  PAUSE_ALL_SPEAKERS,
  DELETE_PERSON,
} from "../actions/types";

const namesList = (state = [], action) => {
  switch (action.type) {
    case ADD_NAME:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isSpeaking: false,
          speakingTime: 0,
          color: randomRbga(),
        },
      ];
    case SET_SPEAKER:
      state.forEach((person) => {
        if (person.id === action.id) {
          if (person.isSpeaking) {
            person.isSpeaking = false;
            person.speakingTime = parseInt(action.time);
          } else {
            person.isSpeaking = true;
          }
        } else {
          if (person.isSpeaking) {
            person.speakingTime = action.time;
          }
          person.isSpeaking = false;
        }
      });
      return [...state];
    case SET_TIME:
      state.forEach((person) => {
        if (person.id === action.id) {
          person.speakingTime = action.time;
        }
      });
      return [...state];
    case ADD_TIME:
      state.forEach((person) => {
        if (person.id === action.id) {
          person.speakingTime += action.time;
        }
      });
      return [...state];
    case MINUS_TIME:
      state.forEach((person) => {
        if (person.id === action.id) {
          person.speakingTime -= action.time;
        }
      });
      return [...state];
    case PAUSE_ALL_SPEAKERS:
      state.forEach((person) => {
        person.isSpeaking = false;
      });
      return [...state];
    case DELETE_PERSON:
      return [...state.filter((person) => person.id !== action.id)];
    case EDIT_NAME:
      state.forEach((person) => {
        if (person.id === action.id) {
          person.text = action.name;
        }
      });
      return [...state];
    default:
      return state;
  }
};
function randomRbga() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
export default namesList;
