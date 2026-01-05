import VerticalCard from "../component/VerticalCard";
import { actionMovies } from "../assets/assets";
import VerticalCardContainer from "../component/VerticalCardContainer";

const Suggestion = () => {
  return (
    <div className="suggestion">
      <div className="cardsSections">
        <h2>Action</h2>
        <VerticalCardContainer moviedata={actionMovies} />
      </div>

      <div className="cardsSections">
        <h2>Suggetion</h2>
        <VerticalCardContainer moviedata={actionMovies} />
      </div>
    </div>
  );
};

export default Suggestion;
