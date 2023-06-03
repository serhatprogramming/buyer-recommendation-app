import { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const DisplayTracker = ({ recTracker }) => <>{recTracker.join("-")}</>;

const App = () => {
  const [recommendation, setRecommendation] = useState({
    recommend: 0,
    notRecommend: 0,
  });

  const [recTracker, setRecTracker] = useState([]);

  const increaseRecommend = () => {
    setRecommendation({
      ...recommendation,
      recommend: recommendation.recommend + 1,
    });
    setRecTracker([...recTracker, "Y"]);
  };

  const increaseNotRecommend = () => {
    setRecommendation({
      ...recommendation,
      notRecommend: recommendation.notRecommend + 1,
    });
    setRecTracker(recTracker.concat("N"));
  };

  return (
    <div>
      <h1>React Sticker</h1>
      <p>Do you recommend to buy this sticker?</p>
      <div>
        <button onClick={increaseRecommend}>
          <ThumbUpOffAltIcon />
        </button>{" "}
        {recommendation.recommend}
      </div>
      <div>
        <button onClick={increaseNotRecommend}>
          <ThumbDownOffAltIcon />
        </button>{" "}
        {recommendation.notRecommend}
      </div>
      <p>
        Track of the recommendations: <br />
        <DisplayTracker recTracker={recTracker} />
      </p>
    </div>
  );
};

export default App;
