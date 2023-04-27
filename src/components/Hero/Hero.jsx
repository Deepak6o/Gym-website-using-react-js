import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';
import { motion } from "framer-motion";
function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile =window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* The Best Adds */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix="+"/>
            </span>
            <span>fitness program</span>
          </div>
        </div>

        {/* Hero-Buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero-images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories */}
        <motion.div
        transition={transition}
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Hero;
