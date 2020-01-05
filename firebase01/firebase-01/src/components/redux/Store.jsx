import { createStore } from "redux";

const stateDefault = {
  userid: "",
  isloged: false,
  usernickname: "",
  description: "",
  likes: 0,
  followers: 0,
  following: 0
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
    case "UPDATE_DATA":
      return {
        ...state,
        usernickname: action.payload,
        description: action.payload2,
        likes: action.payload3,
        followers: action.payload4,
        following: action.payload5
      };
    default:
      return state;
  }
};

export default createStore(reducer);
