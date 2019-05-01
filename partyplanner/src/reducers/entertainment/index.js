export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";

const initialState = {
  entertainments: []
};

export const entertainmentreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        entertainments: state.entertainments.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newentertainments = state.entertainments.map((entertainment, index) => {
        console.log(action.payload, index);
        if (index === action.payload) {
          return { value: entertainment.value, completed: !entertainment.completed };
        }
        return entertainment;
      });
      return {
        ...state,
        entertainments: newentertainments
      };
    case DELETE:
      const filteredentertainment = state.entertainments
        .slice(0, action.payload)
        .concat(state.entertainments.slice(action.payload + 1));
      console.log(filteredentertainment, action.payload);
      return {
        ...state,
        entertainments: filteredentertainment
      };
    default:
      return { ...state };
  }
};
