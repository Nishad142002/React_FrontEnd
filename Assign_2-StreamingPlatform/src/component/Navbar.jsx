import React from "react";
import { pic } from "../assets/assets";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <i className="ri-play-circle-fill"></i>
      </div>
      <div className="navInfo">
        <div className="searchBox">
          <input type="text" />
          <i className="ri-search-line"></i>
        </div>
        <div className="profileInfo">
          <i className="ri-notification-4-fill"></i>
          <div className="profile">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
