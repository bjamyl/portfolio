import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{duration: 0.5, delay: 0.3}}
      id="contact"
      className="contact "
    >
      <div className="contact__container">
        <h2>Get In Touch</h2>
        <p>
          I'm open to freelance and remote opportunities. If you want to say
          hello or have any questions, don't hesitate to reach out. I will get
          back to you within the shortest possible time!{" "}
        </p>
        <a href="mailto:alhassanjamil0@gmail.com">Say Hello</a>
      </div>
    </motion.div>
  );
};

export default Contact;
