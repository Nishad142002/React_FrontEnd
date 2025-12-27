import React from "react";

const Navlinks = () => {
  return (
    <div className="sideBar">
      <div className="topnav">
        <div className="navlink">
          <div className="link">
            <i className="ri-home-4-fill"></i> <h3>Home</h3>
          </div>
          <div className="link">
            <i className="ri-remix-fill"></i> <h3>Explore</h3>
          </div>
          <div className="link">
            <i className="ri-stack-fill"></i> <h3>Genres</h3>
          </div>
          <div className="link">
            <i className="ri-bookmark-fill"></i> <h3>Favourites</h3>
          </div>
        </div>
        <div className="navlink">
          <div className="link">
            <i className="ri-play-large-fill"></i> <h3>Continue Watching</h3>
          </div>
          <div className="link">
            <i className="ri-timer-2-fill"></i> <h3>Recently Added</h3>
          </div>
          <div className="link">
            <i className="ri-folder-5-fill"></i> <h3>My Collections</h3>
          </div>
          <div className="link">
            <i className="ri-download-2-fill"></i> <h3>Downloads</h3>
          </div>
        </div>
      </div>
      <div className="bottomnav">
        <div className="navlink">
          <div className="link">
            <i className="ri-settings-3-fill"></i> <h3>Setting</h3>
          </div>
          <div className="link">
            <i className="ri-logout-box-r-line"></i> <h3>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
