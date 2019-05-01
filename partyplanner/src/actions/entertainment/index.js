import { ADD, DELETE, TOGGLE_COMPLETED } from "../../reducers/entertainment/index";

export const addEntertainment = entertainment => {
  return {
    type: ADD,
    payload: entertainment
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteEntertainment = id => {
  return {
    type: DELETE,
    payload: id
  };
};