import {
  ADD_NAME,
  SET_SPEAKER,
  SET_TIME,
  PAUSE_ALL_SPEAKERS,
  SET_MODE,
  ADD_TIME,
  MINUS_TIME,
} from "./types";

let nextNameId = 0;
export const addName = (text) => ({
  type: ADD_NAME,
  id: nextNameId++,
  text,
});

export const setSpeaker = (id, time) => ({
  type: SET_SPEAKER,
  id,
  time,
});

export const setTime = (id, time) => ({
  type: SET_TIME,
  id,
  time,
});

export const addTime = (id, time) => ({
  type: ADD_TIME,
  id,
  time,
});

export const minusTime = (id, time) => ({
  type: MINUS_TIME,
  id,
  time,
});

export const pauseAllSpeakers = () => ({
  type: PAUSE_ALL_SPEAKERS,
});

export const setMode = (mode) => ({
  type: SET_MODE,
  mode,
});
