import { createStore } from "redux";

const stateDefault = {
  userid: "",
  isloged: false,
  usernickname: ""
};

// (previousState,action)=>newState
const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LOG_STATUS":
      return {
        ...state,
        userid: action.payload,
        isloged: action.payload2
      };
    default:
      return state;
  }
};

export default createStore(reducer);
