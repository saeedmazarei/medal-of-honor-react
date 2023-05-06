import { useContext, useState } from "react";

import context from "./UserContext";
import RateProgress from "./RateProgress";
import GetCoin from "./GetCoin";
import AllTiks from "./AllTiks";

function Progressbar() {
  const [claimChange1, setClaimChange1] = useState(false);
  const [claimChange2, setClaimChange2] = useState(false);
  const [claimChange3, setClaimChange3] = useState(false);
  const landingData = useContext(context);  
  let score = landingData.missions[0].score;
  score = (score * 100) / 60;
  return (
    <div className="progress-bar-container">
      <div className="rate-progress-container">
        <RateProgress classname={'first'} coinsNumber={15} />
        <RateProgress classname={'second'} coinsNumber={30} />
        <RateProgress classname={'third'} coinsNumber={60} />
      </div>
      <span id="score">{landingData.missions[0].score}/60</span>
      <div id="progress-bar">
        <div id="pr-bars" style={{ width: score + "%" }}></div>
        <div id="line-container">
          <div className="line" id="first-line"></div>
        </div>
      </div>
      <div id="get-coin">
        <GetCoin id={1} claimChange={claimChange1} />
        <GetCoin id={2} claimChange={claimChange2} />
        <GetCoin id={3} claimChange={claimChange3} />
      </div>
      <div id="score-container">
        <AllTiks id={1} claimChange={claimChange1} setClaimChange={setClaimChange1} />
        <AllTiks id={2} claimChange={claimChange2} setClaimChange={setClaimChange2} />
        <AllTiks id={3} claimChange={claimChange3} setClaimChange={setClaimChange3} />
      </div>
    </div>
  );
}

export default Progressbar;
