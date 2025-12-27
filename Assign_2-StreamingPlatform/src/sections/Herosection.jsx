import React from "react";
import "./sections.scss";
import HeroSlider from "../component/HeroSlider";
import HorizontalCard from "../component/HorizontalCard";
import { continueWatching } from "../assets/assets";

const Herosection = () => {
  return (
    <section className="heroSection">
      <HeroSlider />
      <div className="herobottom">
        <h2>Continue Watching</h2>
        <div className="heroCardContainer">
          {continueWatching.map((elem, idx) => {
            return <HorizontalCard elem={elem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
