import React from "react";
import { slider1 } from "../assets/assets";

const HeroSlider = () => {
  return (
    <div className="SliderContainer">
      <div className="slider">
        <img src={slider1} alt="" />
        <div className="sliderContent">
          <div className="tags">
            <p>🔥Now Trending</p>
            <div className="catg-tags">
              <p>Sci-fi</p>
              <p>Action</p>
            </div>
          </div>
          <div>
            <div className="title">
              <h1>Iron Man 1</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet doloremque blanditiis labore, tempora tenetur sit
                assumenda rem minus quod distinctio!
              </p>
            </div>
            <div className="btn">
              <button className="btnWatch">
                <i className="ri-play-fill"></i>Watch Now
              </button>
              <button className="btnSave">
                <i className="ri-bookmark-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
