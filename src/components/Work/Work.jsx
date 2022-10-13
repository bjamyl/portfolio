import { motion } from "framer-motion";
import React from "react";
import "./Work.scss";

const Work = ({
  workImage,
  workTitle,
  workDescription,
  workBrief,
  buttonName,
  icon,
  link,
  tech
}) => {
  return (
    <section className="work ">
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }} className="work__container grid">
        <div className="work__container-content">
          <div className="image__container">
            <motion.img whileHover={{scale:[1,1.1]}}
          transition={{duration:0.2}} src={workImage} alt="" />
          </div>
          <div className="content__container">
            <h3>{workTitle}</h3>
            <h4>{workDescription}</h4>
            <p>{workBrief}</p>
            <p className="tech"><span>Tech stack:</span> {tech}</p>
            <div className="work-btn">
              <a href={link} target="_blank" rel="noreferrer">
                {" "}
                {icon}
                {buttonName}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
