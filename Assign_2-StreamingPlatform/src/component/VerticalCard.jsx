import React from "react";

const VerticalCard = (props) => {
  return (
    <div className="verticalCard">
      <img src={`${import.meta.env.BASE_URL}${props.elem.img}`} alt="" />
      <div className="info">
        <h3>{props.elem.name}</h3>
        <div className="details">
          <p>{props.elem.year}</p>
          {props.elem.isSaved ? (
            <i class="ri-bookmark-fill"></i>
          ) : (
            <i class="ri-bookmark-line"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
