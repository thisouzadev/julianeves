import React, { useState } from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Information from "./components/information/Information";
import Menu from "./components/menu/Menu";
import SliderComponent from "./components/slider/SliderComponent";

import "./app.scss";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Information />
        <SliderComponent />;
      </div>
    </div>
  );
}

export default App;
