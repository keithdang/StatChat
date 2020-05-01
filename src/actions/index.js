import {
  ADD_NAME,
  CHANGE_COLOR,
  DELETE_PERSON,
  SET_SPEAKER,
  SET_TIME,
  PAUSE_ALL_SPEAKERS,
  SET_MODE,
  ADD_TIME,
  MINUS_TIME,
  EDIT_NAME,
} from "./types";

let nextNameId = 0;
export const addName = (name) => ({
  type: ADD_NAME,
  id: nextNameId++,
  name,
});

export const deletePerson = (id) => ({
  type: DELETE_PERSON,
  id,
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

export const editName = (id, name) => ({
  type: EDIT_NAME,
  id,
  name,
});

export const changeColor = (id) => ({
  type: CHANGE_COLOR,
  id,
});

export const pauseAllSpeakers = () => ({
  type: PAUSE_ALL_SPEAKERS,
});

export const setMode = (mode) => ({
  type: SET_MODE,
  mode,
});
