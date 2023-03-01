/* eslint-disable require-jsdoc */
import React from "react";
import "./information.scss";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiFillIcons from "react-icons/ai";

function Information() {
  const information = [
    {
      information: "Name",
      answeredInformation: "Thiago Souza e Souza",
    },
    {
      information: "Email",
      answeredInformation: "thiagodesouza.dev@gmail.com",
    },
    {
      information: "Celular/WhatsApp",
      answeredInformation: "+55(21)97944-7656",
    },
    {
      information: "Data de Nascimento",
      answeredInformation: "Outubro 2, 1991",
    },
    {
      information: "Cidade",
      answeredInformation: "Rio de janeiro, RJ",
    },
    {
      information: "GitHub",
      answeredInformation: "https://github.com/thisouzadev",
    },
    {
      information: "Linkedin",
      answeredInformation: "https://www.linkedin.com/in/thisouzadev/",
    },
  ];

  return (
    <div className="information" id="information">
      <a
        href="https://clozzy.com.br/mypack/checkout"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
      >
        <div className="itemContainer">
          <AiFillIcons.AiFillStar className="icon" />
        </div>
        Close Friends
      </a>

      <a
        href="https://www.tiktok.com/@juneveiss?_t=8Wic6ZIeBaX&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
      >
        <div className="itemContainer">
          <FaIcons.FaTiktok className="icon" />
        </div>
        Tik Tok: juneveiss/
      </a>

      <a
        href="https://www.instagram.com/julianeveis/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
      >
        <div className="itemContainer">
          <AiFillIcons.AiFillInstagram className="icon" />
        </div>
        Instagram: julianeveis/
      </a>

      <a
        href="https://www.instagram.com/assessoriajulianeves/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
      >
        <div className="itemContainer">
          <AiFillIcons.AiFillInstagram className="icon" />
        </div>
        Instagram: assessoriajulianeves/
      </a>
    </div>
  );
}

export default Information;
