import React from "react";
import "./Works.scss";
import { Work } from "../../components/index";
import { FaDribbble } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { images } from "../../constants";

const Works = () => {
  return (
    <section id="works" className="works-section grid">
      <div className="works-section__container ">
        <h2>WORKS</h2>
        <Work
          workImage={images.roomie}
          workTitle={"Roomie"}
          workDescription={"UI/UX DESIGN"}
          workBrief={
            "Roomie is design for a website to help students find affordable and comfortable places to stay while they pursue their studies."
          }
          icon={<FaDribbble />}
          buttonName={"See on Dribbble"}
          link={"https://react-icons.github.io/react-icons/search?q=dribbble"}
        />
        <Work className='work_2'
          workImage={images.guess}
          workTitle={"Number Guessing Game"}
          workDescription={"UI/UX DESIGN AND DEVELOPMENT"}
          workBrief={
            "This app generate a random number for users to try and guess the right number before the score hits zero."
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://funguessbyjamyl.netlify.app/"}
        />
      </div>
    </section>
  );
};

export default Works;
