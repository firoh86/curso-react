import React from "react";
// useSelector sustituye el mapstatetoprops, y usedispatch el mapdispatchtoprops
// estos metodos sustituyen el componente de alto orden connect haciendolos menos pesados
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const names = useSelector(state => state.names);
  const dispatch = useDispatch();
  console.log(names);

  const handleClick = name => {
    return dispatch({
      type: "ADD_NAME",
      payload: name
    });
  };

  return (
    <div className="App">
      <li>{names}</li>
      <button onClick={() => handleClick("firoh")}>pulsame</button>
    </div>
  );
}

export default App;
