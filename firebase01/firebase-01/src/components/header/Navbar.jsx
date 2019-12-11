import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// para state de redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector(state => state);
  return (
    <div className="navbar">
      <NavLink
        to="/home"
        activeClassName="is-active"
        className="navbar__element "
      >
        <FontAwesomeIcon icon={faHome} size="1x" className="navbar__icon" />
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="is-active"
        className="navbar__element "
      >
        <FontAwesomeIcon icon={faQuestion} size="1x" className="navbar__icon" />
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="is-active"
        className="navbar__element "
      >
        <FontAwesomeIcon icon={faEnvelope} size="1x" className="navbar__icon" />
      </NavLink>

      {!state.isloged ? (
        <NavLink
          to="/login"
          activeClassName="is-active"
          className="navbar__element "
        >
          <FontAwesomeIcon
            icon={faSignInAlt}
            size="1x"
            className="navbar__icon"
          />
        </NavLink>
      ) : (
        <>
          <NavLink
            to="/login"
            activeClassName="is-active"
            className="navbar__element "
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="1x"
              className="navbar__icon"
            />
          </NavLink>

          <NavLink
            to="/profile"
            activeClassName="is-active"
            className="navbar__element "
          >
            <FontAwesomeIcon icon={faUser} size="1x" className="navbar__icon" />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
