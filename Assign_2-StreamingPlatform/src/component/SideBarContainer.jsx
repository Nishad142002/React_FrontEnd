import React, { useState } from "react";
import "./component.scss";

import Navlinks from "./Navlinks";

const SideBarContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className={`sideBarContainer ${menuOpen ? "menuOpen" : "menuClose"}`}>
      <div className="topBox">
        <h1>Drameeo</h1>
        {menuOpen ? (
          <i className="ri-menu-fold-fill" onClick={openMenu}></i>
        ) : (
          <i className="ri-menu-unfold-fill" onClick={openMenu}></i>
        )}
      </div>
      <Navlinks />
    </div>
  );
};

export default SideBarContainer;
