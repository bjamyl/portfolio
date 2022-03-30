import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="header" className="navbar ">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h2>J.</h2>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="#header">home</a>
            </li>
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a href="#works">works</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
