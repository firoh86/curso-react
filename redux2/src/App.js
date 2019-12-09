import React from "react";
// useSelector permite tomar los datos sin usar connect que es un componente de alto orden
import { useSelector } from "react-redux";

function App(props) {
  // así lo declaramos
  const data = useSelector(state => {
    console.log(state);
  });
  return (
    <div className="App">
      <button>pulsame</button>
    </div>
  );
}

export default App;
