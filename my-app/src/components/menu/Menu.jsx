/* eslint-disable require-jsdoc */
import React from "react";
import "./menu.scss";
import PropTypes from "prop-types";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#information">Contato</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#slide">Fotos</a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
