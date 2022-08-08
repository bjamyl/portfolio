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
          link={
            "https://dribbble.com/shots/17948464-Roomie-Student-Accommodation-Site-Landing-Page"
          }
        />
        <Work
          className="work_2"
          workImage={images.guess}
          workTitle={"Number Guessing Game"}
          workDescription={"UI/UX DESIGN AND DEVELOPMENT"}
          workBrief={
            "This app generates a random number for users to try and guess the right number before the score hits zero."
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://funguessbyjamyl.netlify.app/"}
        />
        <Work
          className="work_2"
          workImage={images.jamflix}
          workTitle={"JamFlix-Streaming Service App UI"}
          workDescription={"DEVELOPMENT"}
          workBrief={
            "A streaming service app with realtime data fetched through TMDB Movie database API"
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://streaming-service-aipzeqw65-bjamyl.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Works;
