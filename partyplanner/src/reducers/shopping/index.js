export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";

const initialState = {
  shoppings: []
};

export const shoppingreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        shoppings: state.shoppings.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newshoppings = state.shoppings.map((shopping, index) => {
        console.log(action.payload, index);
        if (index === action.payload) {
          return { value: shopping.value, completed: !shopping.completed };
        }
        return shopping;
      });
      return {
        ...state,
        shoppings: newshoppings
      };
    case DELETE:
      const filteredshopping = state.shoppings
        .slice(0, action.payload)
        .concat(state.shoppings.slice(action.payload + 1));
      console.log(filteredshopping, action.payload);
      return {
        ...state,
        shoppings: filteredshopping
      };
    default:
      return { ...state };
  }
};
