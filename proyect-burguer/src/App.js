import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navBar/Navbar";
// paginas de las rutas
import Home from "./components/home/Home";
import Pedido from "./components/pedido/Pedido";
import Faq from "./components/faq/Faq";
const App = () => {
  return (
    <Router>
      <Navbar></Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/pedido" component={Pedido} />

        <Route exact path="/faq" component={Faq} />
      </Switch>
    </Router>
  );
};

export default App;
