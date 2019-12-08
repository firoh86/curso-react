import { createStore } from "redux";

const stateDefault = {
  name: ""
};

// (previousState,action)=>newState
const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: state.name
      };
    default:
      return state;
  }
};

export default createStore(reducer);
