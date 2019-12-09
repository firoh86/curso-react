import { createStore } from "redux";

const stateDefault = {
  names: []
};

const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "addName":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default createStore(reducer);
