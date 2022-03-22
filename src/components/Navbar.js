import React from "react";
import reactLogo from "../images/react-icon-small.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={reactLogo} className="nav-icon" alt="React Logo" />
      <h3 className="nav-logo-text">ReactFacts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
