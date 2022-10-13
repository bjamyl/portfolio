import React from "react";
import "./Works.scss";
import { Work } from "../../components/index";
import { AiFillEye } from "react-icons/ai";
import { images } from "../../constants";

const Works = () => {
  return (
    <section id="works" className="works-section grid">
      <div className="works-section__container ">
        <h2>WORKS</h2>
        <Work
          className="work_2"
          workImage={images.real_estate}
          workTitle={"Real Estate App"}
          workDescription={"WEB DEVELOPMENT"}
          workBrief={
            "A web app for viewing, searching and making enquiries about property listings. Users can create accounts to gain access to a dashboard and view properties they have enquired about."
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://myrealestateapp.vercel.app/"}
          tech={"Django REST Framework, Next JS, Tailwind CSS, Framer Motion PostgreSQL"}
        />
        <Work
          className="work_2"
          workImage={images.spexbyte}
          workTitle={"Spexbyte Development Agency"}
          workDescription={"WEB DEVELOPMENT"}
          workBrief={
            "A website for a digital creative agency based in Ghana. The purpose of this site is to showcase projects, identify the Spexbyte brand and allow clients to easily seek services of this agency. This is a work in progress."
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://spexbyte.netlify.app/"}
          tech={"Next JS, Tailwind CSS, Framer Motion, GSAP"}
        />
        <Work
          className="work_2"
          workImage={images.jamflix}
          workTitle={"JamFlix-Streaming Service App UI"}
          workDescription={"WEB DEVELOPMENT"}
          workBrief={
            "A streaming service app with realtime data fetched through TMDB Movie database API"
          }
          icon={<AiFillEye />}
          buttonName={"View Live Site"}
          link={"https://streaming-service-aipzeqw65-bjamyl.vercel.app/"}
          tech={"Next JS, Tailwind CSS, TMDB Database API"}

        />
        <Work
          className="work_2"
          workImage={images.search_app}
          workTitle={"Restaurant Search App"}
          workDescription={"MOBILE APP DEVELOPMENT"}
          workBrief={
            "A cross-platform mobile app that displays search results, including the rating, name and photos using the Yelp API about restaurants and foods."
          }
          icon={<AiFillEye />}
          buttonName={"View on Github"}
          link={"https://github.com/bjamyl/react_native_restaurant_search_app"}
          tech={"React Native, Yelp API"}

        />
      </div>
    </section>
  );
};

export default Works;
