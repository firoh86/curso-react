import { useDispatch } from "react-redux";

const Actions = () => {
  const dispatch = useDispatch();

  const logStatus = (userID, logState) => {
    return dispatch({
      type: "LOG_STATUS",
      payload: userID,
      payload2: logState
    });
  };

  return [logStatus];
};

export default Actions;
