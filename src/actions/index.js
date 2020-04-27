import { ADD_NAME, SET_SPEAKER } from "./types";

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
