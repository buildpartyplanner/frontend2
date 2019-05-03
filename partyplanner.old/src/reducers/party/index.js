export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";

const initialState = {
  parties: []
};

export const partyreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        parties: state.parties.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newparties = state.parties.map((party, index) => {
        console.log(action.payload, index);
        if (index === action.payload) {
          return { value: party.value, completed: !party.completed };
        }
        return party;
      });
      return {
        ...state,
        parties: newparties
      };
    case DELETE:
      const filteredparties = state.parties
        .slice(0, action.payload)
        .concat(state.parties.slice(action.payload + 1));
      console.log(filteredparties, action.payload);
      return {
        ...state,
        parties: filteredparties
      };
    default:
      return { ...state };
  }
};
