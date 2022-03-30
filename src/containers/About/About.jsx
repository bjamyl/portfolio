import React from "react";
import "./About.scss";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section id="about" className="section__container">
      <div className="about grid">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="about__container"
      >
        <h2>ABOUT ME</h2>
        <h3>
          Hello stranger, introducing <span>Jamil Alhassan</span>{" "}
        </h3>
        <p className="leading-text">
          I'm a graphic designer and digital artist turned developer. My journey
          to become a developer began during the COVID 19 Pandemic lockdown.
          Since then, I've journeyed through the ups and downs of learning to
          code with the help of online courses and YouTube tutorials. I am proud
          to say today, I can design and bring to life, designs in the form of
          websites and web apps with techonlogies like HTML5, CSS3, Boostrap,
          Javascript and React JS. When I'm not busy saving the world by
          learning code, you'll most probably find me making art or playing
          video games.
        </p>
        <div className="lower__section">
          <p className="skills">
            {/* <div className="skills-icon"> <GoTools/></div> <br /> */}
            My skills include: <br />
            <span>UI/UX, Front-end Development, Logo Design</span>
          </p>
          <p  className="dev">
          {/* <div className="skills-icon"> <BsBriefcaseFill/></div> <br /> */}
            My development and tech aresenal: <br />
            <span>
              HTML5, CSS, Javascript(ES6+), SASS. ReactJS, Bootstrap, Bulma,
              Material UI, FramerMotion, Sanity, Figma, Illustrator, Photoshop,
              Git, GitHub
            </span>
          </p>
        </div>
      </motion.div>

      </div>
    </section>
  );
};

export default About;
