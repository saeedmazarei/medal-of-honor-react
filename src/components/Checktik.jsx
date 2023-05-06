import { useState, useContext } from "react";

import Loading from "./Loading";
import ClaimContext from "./Claimcontext";
import hashContext from "./HashContext";
import context from "./UserContext";

function CheckTik(props) {
  const landingData = useContext(context);
  const [loadingStatuss, setloadingStatuss] = useState(false);
  const [claimChange, setClaimChange] = useContext(ClaimContext);
  const hashId = useContext(hashContext);
  if (loadingStatuss) {
    return <Loading />;
  }

  function claim() {
    getLandingData(hashId)
      .then((result) => {
        // setLandingData(result.data);
        console.log(result.data);
        setloadingStatuss(false);
      })
      .catch((error) => {
        console.log(error.message);
        setloadingStatuss(false);
      });
  }
  return (
    <>
      <div className="rate-progress-container">
        <span className="gold-number" id={`${props.classname}-gold-number`}>
          {props.coinsNumber}
        </span>
        <img id={`${props.classname}-rate-pic`} src="./assets/images/medal on-min.png" />
      </div>
      <div id="get-coin" className={`${
            landingData.missions[props.id-1].reward_status !== "Unlocked" && "deactive"
          }`}>
        <div className={`coins getcoin${props.id}`}>
          <img src="./assets/images/claim-btn-min.png" />
        </div>
      </div>
      <div id="score-container">
        <div className={`tik-class box-${props.id}`}>
          {landingData.missions[props.id-1].reward_status == "Locked" ? (
            <img src={`./assets/images/blue ${props.id}-min.png`} />
          ) : landingData.missions[props.id-1].reward_status == "Unlocked" ? (
            <img src={`./assets/images/gold ${props.id}-min.png`} id={props.id} onClick={claim} />
          ) : (
            <img src="./assets/images/green 0-min.png" className="green" />
          )}
        </div>
      </div>
    </>
  );
}

export default CheckTik;
