import React, { useState } from "react";
import "./Floatbar.scss";
import { BiHomeAlt } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineMessage, AiOutlineBulb } from "react-icons/ai";

const Floatbar = () => {
  const [toggle, setToggle] = useState("#header");

  return (
    <nav className="floatbar grid">
      <div className="floatbar__container">
        <ul className="floatbar__container-links ">
          <li
            onClick={() => setToggle("#header")}
            className={toggle === "#header" ? "active" : ""}
          >
            <a className="link" href="#header">
              <BiHomeAlt />{" "}
            </a>
            <p>Home</p>
          </li>
          <li
            onClick={() => setToggle("#about")}
            className={toggle === "#about" ? "active" : ""}
          >
            <a className="link" href="#about">
              <RiUserLine />
            </a>
            <p>About</p>
          </li>
          <li
            onClick={() => setToggle("#works")}
            className={toggle === "#works" ? "active" : ""}
          >
            <a className="link" href="#works">
              <AiOutlineBulb />
            </a>
            <p>Works</p>
          </li>
          <li
            onClick={() => setToggle("#contact")}
            className={toggle === "#contact" ? "active" : ""}
          >
            <a className="link" href="#contact">
              <AiOutlineMessage />
            </a>
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Floatbar;
