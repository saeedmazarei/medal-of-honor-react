import { useContext } from "react";

import context from "./UserContext"

function GetCoin(props) {
    const landingData = useContext(context);
    return(
        <div className={`coins getcoin${props.id} ${
            landingData.missions[props.id-1].reward_status == "Unlocked" && props.claimChange == false ? "active" : ''
          }`}>
          <img src="./assets/images/claim-btn-min.png" />
        </div>
    )
}

export default GetCoin