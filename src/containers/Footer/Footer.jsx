import React from "react";
import "./Footer.scss";
import { FaDribbble, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer grid">
      <div className="footer__container">
        <div className="footer-links">
          <ul>
            <li>
              <a 
                href="https://github.com/bjamyl"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jamil-banamwine-alhassan-0171b7166/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MhylJay"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/bjalhassan"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaDribbble />{" "}
              </a>
            </li>
          </ul>
        </div>
        <p id="footer-text">Handcrafted by Jamil &#169; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
