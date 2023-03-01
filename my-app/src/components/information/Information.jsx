/* eslint-disable require-jsdoc */
import React from "react";
import "./information.scss";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiFillIcons from "react-icons/ai";

function Information() {
  return (
    <div className="information" id="information">
      <a
        href="https://clozzy.com.br/mypack/checkout"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
        className="border-customizada"
      >
        <div className="itemContainer icon-girando ">
          <AiFillIcons.AiFillStar className="icon" />
        </div>
        Close Friends
      </a>

      <a
        href="https://www.tiktok.com/@juneveiss?_t=8Wic6ZIeBaX&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
        className="border-customizada"
      >
        <div className="itemContainer">
          <FaIcons.FaTiktok className="icon" />
        </div>
        <p> Tik Tok: juneveiss/</p>
      </a>

      <a
        href="https://t.me/sobremeuconteudo"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
        className="border-customizada"
      >
        <div className="itemContainer">
          <BsIcons.BsTelegram className="icon" />
        </div>
        Telegram Vip
      </a>
    </div>
  );
}

export default Information;
