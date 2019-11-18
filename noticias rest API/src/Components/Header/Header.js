import React from "react";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ titulo }) => (
  <nav className="navbar">
    <h3 className="logo">{titulo}</h3>
  </nav>
);
Header.propTypes = {
  titulo: PropTypes.string.isRequired
};
export default Header;
