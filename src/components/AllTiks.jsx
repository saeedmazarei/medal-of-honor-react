import { useContext, useState } from "react";

import context from "./UserContext";
import { claimReward } from "../js/apis";
import hashContext from "./HashContext";
import Modal from "./Modal";

function AllTiks({id, claimChange, setClaimChange}) {
  const [loadingStatus, setloadingStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false);
  const [modal, setModal] = useState("off");
  const landingData = useContext(context);
  const [clickItem, setClickItem] = useState(true);
  const hashId = useContext(hashContext);

  function handleClickItem() {
    setClickItem(!clickItem);
  }

  function claim(event) {
    setloadingStatus(true);
    claimReward(hashId, event.target.id)
      .then(() => {
        setloadingStatus(false);
        setClaimChange(true);
      })
      .catch((error) => {
        console.log(error.message);
        setloadingStatus(false);
        setModal("on");
        setErrorMessage(true);
      });
  }
  if (errorMessage) {
    return (
      <Modal modal={modal} setModal={setModal} errorMessage={errorMessage} />
    );
  }
  return (
    <div className={`tik-class box-${id}`}>
      {landingData.missions[id - 1].reward_status == "Locked" && clickItem ? (
        <img src={`./assets/images/blue ${id}-min.png`} onClick={handleClickItem} />
      ) : landingData.missions[id - 1].reward_status == "Locked" && clickItem == false ? (
        <img src={`./assets/images/blue 0-min.png`} className="green" onClick={handleClickItem} />
      ) : landingData.missions[id - 1].reward_status == "Unlocked" &&
      claimChange == false ? (
        <img
          src={`./assets/images/gold ${id}-min.png`}
          id={id}
          onClick={claim}
        />
      ) : (
        <img src="./assets/images/green 0-min.png" className="green" /> 
      )}
    </div>
  );
}

export default AllTiks;
