import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Header = () => {
  return (
    <header  className="header ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header__container grid"
      >
        <div className="header__content">
          <h2>Hello, I'm Jamil</h2>
          <h1>
            I add value to design <br /> through <span>simplicity</span> <br />{" "}
            and <span>clarity</span>
          </h1>
          <h4>
            FULLSTACK WEB DEVELOPER 
          </h4>
          <a href="#contact" className="header__content-btn">
            Let's Talk
          </a>
        </div>
        <div className="header__animation ">
          <div className="main_container">
            <div className="balance_container">
              <div className="balance">
                <div className="balls_container">
                  <img id="circle" src={images.circle} alt="" />
                  <img id="square" src={images.square} alt="" />
                </div>
                <img id="bar" src={images.bar} alt="" />
              </div>
            </div>
            <img id="triangle" src={images.triangle} alt="triangleimg" />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
