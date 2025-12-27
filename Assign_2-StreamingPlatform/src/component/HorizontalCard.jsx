import React from "react";
import { slider1 } from "../assets/assets";

const HorizontalCard = (props) => {
  return (
    <div className="horizontalCard">
      <img src={props.elem.img} alt="" />
      <div className="info">
        <h3>{props.elem.name}</h3>
        <div className="details">
          <p>{props.elem.year}</p>
          <p>{props.elem.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
