import {
  ADD_NAME,
  SET_SPEAKER,
  SET_EDIT,
  SET_TIME,
  PAUSE_ALL_SPEAKERS,
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

export const pauseAllSpeakers = () => ({
  type: PAUSE_ALL_SPEAKERS,
});

export const setEditMode = () => ({
  type: SET_EDIT,
});
