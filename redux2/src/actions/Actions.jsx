import { useDispatch } from "react-redux";
const Actions = () => {
  const dispatch = useDispatch();

  const addname = name => {
    return dispatch({
      type: "ADD_NAME",
      payload: name
    });
  };
  return [addname];
};

export default Actions;
