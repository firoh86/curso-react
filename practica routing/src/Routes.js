import React from "react";
//  npm install react-router-dom
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Lista" component={List} />
    </Switch>
  );
};

export default Routes;
