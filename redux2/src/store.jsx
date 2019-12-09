import { createStore } from "redux";

const stateDefault = {
  names: []
};

const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, action.payload]
      };
    default:
      return state;
  }
};

export default createStore(reducer);
