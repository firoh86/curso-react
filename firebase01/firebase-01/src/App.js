import React from "react";
import "./App.scss";

import Navbar from "./components/header/Navbar";
// Rutas

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";

// para redux
import { Provider } from "react-redux";
import store from "./components/redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/*" component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
