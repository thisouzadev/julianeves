/* eslint-disable require-jsdoc */
import React from "react";
import "./topbar.scss";
import PropTypes from "prop-types";

import * as BSIcons from "react-icons/bs";
import * as MDIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as FAIcons from "react-icons/fa";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Julia.
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

Topbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Topbar;
