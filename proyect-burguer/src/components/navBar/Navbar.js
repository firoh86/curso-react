import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">
        Inicio
      </Link>
      <Link className="navbar-link" to="/pedido">
        Hacer Pedido
      </Link>
      <Link className="navbar-link" to="/faq">
        Preguntas Frecuentes
      </Link>
    </div>
  );
};

export default Navbar;
