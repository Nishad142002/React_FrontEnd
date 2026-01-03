import Herosection from "./sections/Herosection";
import SideBarContainer from "./component/SideBarContainer";
import Navbar from "./component/Navbar";
import Suggestion from "./sections/Suggestion";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <SideBarContainer />
        <div className="mainContainer">
          <Herosection />
          <Suggestion />
        </div>
      </div>
    </main>
  );
};

export default App;
