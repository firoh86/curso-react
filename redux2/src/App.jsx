import React from "react";
// useSelector to get the store data
import { useSelector } from "react-redux";
// import actions from action as custom hook
import Actions from "./actions/Actions";

function App(props) {
  const names = useSelector(state => state.names);
  console.log(names);
  const [addname] = Actions("");

  return (
    <div className="App">
      <li>{names}</li>
      <button onClick={() => addname("firoh")}>pulsame</button>
    </div>
  );
}

export default App;
