const minToSec = 60;
const hourToSec = minToSec * 60;
function timeDisplay(timeInSeconds) {
  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var leftOverSeconds = 0;
  var evenMoreleftover = 0;
  if (timeInSeconds >= minToSec) {
    if (timeInSeconds >= hourToSec) {
      leftOverSeconds = timeInSeconds % hourToSec;
      hours = (timeInSeconds - leftOverSeconds) / hourToSec;
      evenMoreleftover = leftOverSeconds % minToSec;
      minutes = (leftOverSeconds - evenMoreleftover) / minToSec;
      seconds = evenMoreleftover;
    } else {
      leftOverSeconds = timeInSeconds % minToSec;
      minutes = (timeInSeconds - leftOverSeconds) / minToSec;
      seconds = leftOverSeconds;
    }
  } else {
    seconds = timeInSeconds;
  }
  var showTime =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  return showTime;
}
export default timeDisplay;
