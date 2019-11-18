import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home-container">
      <h1>Poke App</h1>
      <NavLink to="/Lista" exact activeClassName="linkActive">
        Ver Lista
      </NavLink>
    </div>
  );
};

export default Home;
