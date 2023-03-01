/* eslint-disable require-jsdoc */
import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Me adicione nas redes sociais",
        "Seja meu assinante no clozzy",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/julia.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bem vindo, Eu sou</h2>
          <h1>Julia Neves</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#information">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
