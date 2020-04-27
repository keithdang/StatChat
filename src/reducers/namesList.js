import { ADD_NAME, SET_SPEAKER } from "../actions/types";

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
            person.speakingTime = action.time;
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
