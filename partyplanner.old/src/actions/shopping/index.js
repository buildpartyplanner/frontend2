import { ADD, DELETE, TOGGLE_COMPLETED } from "../../reducers/shopping/index";

export const addShopping = shopping => {
  return {
    type: ADD,
    payload: shopping
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const deleteShopping = id => {
  return {
    type: DELETE,
    payload: id
  };
};