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
            I'm a Biological Scientist turned developer. How did this happen?
            Well, my journey to become a developer kicked off during the COVID
            19 Pandemic lockdown. I had always been interested in tech ever
            since I was a kid which earned me the out of fashion moniker
            "Computer wizard" growing up. So it came as no surprise to me when I
            just could not stop coding after trying my hands on some python.
            Since then, I've journeyed through the ups and downs of teaching
            myself to program with the help of online courses and YouTube
            tutorials.
            <p>
              I am proud to say today, I can design and bring to life, designs
              in the form of websites and web apps with popular web techonlogies
              like React for frontend development, Django for backend
              development and APIs built with Django REST Framework. When I'm
              not busy saving the world by learning code, you'll most probably
              find me making art, playing video games or watching House of The
              Dragon or anticipating the next episode(I do hope they nail the
              ending on this one. Lol).
            </p>
          </p>
          <div className="lower__section">
            <p className="skills">
              {/* <div className="skills-icon"> <GoTools/></div> <br /> */}
              My skills include: <br />
              <span>Fullstack web development</span>
            </p>
            <p className="dev">
              {/* <div className="skills-icon"> <BsBriefcaseFill/></div> <br /> */}
              My development and tech aresenal: <br />
              <span>
                HTML5, CSS, Javascript(ES6+), SCSS, ReactJS, React Native,
                NextJS, Django, Django REST Framework, PostgreSQL,Tailwind CSS,
                Material UI, FramerMotion, GSAP, Git, GitHub
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
