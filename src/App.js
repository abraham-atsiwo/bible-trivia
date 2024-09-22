import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import background from "./assets/background_image/image.png";


import Menu from "./components/Menu/Menu";
import SidebarContent from "./pages/SidebarContent";


import "./styles/global.css";

function App() {
  return (
    <Router>
    <div
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <div className="container">
        <Menu/>
        <SidebarContent/>
      </div>
    </div>
    </Router>
  );
}

export default App;
