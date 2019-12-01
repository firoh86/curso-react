import React from "react";
import "./App.css";
// importamos el Provider de la libreria react-redux
// El provider debe envolver toda nuestra aplicacion, igual que con context
//  para poder acceder a el desde cualquiera de nuestros componentes
import { Provider } from "react-redux";
import store from "./store";

import Players from "./components/Players";
import SelectedTeam from "./components/SelectedTeam";
const App = () => {
  return (
    // el provider debe proveer el store
    <Provider store={store}>
      <div>
        <h1>Manager</h1>
        <Players />
        <SelectedTeam />
      </div>
    </Provider>
  );
};

export default App;
