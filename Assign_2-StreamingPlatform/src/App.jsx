import React from "react";
import Herosection from "./sections/Herosection";
import SideBarContainer from "./component/SideBarContainer";
import Navbar from "./component/Navbar";
import Other from "./sections/Other";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <SideBarContainer />
        <div className="mainContainer">
          <Herosection />
          <Other />
        </div>
      </div>
    </main>
  );
};

export default App;
