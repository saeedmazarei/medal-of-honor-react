import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import Header from "./Header";
import { registerGame } from "../js/apis";
import hashContext from "./HashContext";
import PinBottom from "./PinBottom";
import Modal from "./Modal";

function Startlanding({urlData}) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [modal, setModal] = useState("off");
  const queryParams = new URLSearchParams(window.location.search)
  const hashId = queryParams.get("player_id");
  const navigate = useNavigate();
  function regigisterApi() {
    registerGame(hashId)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(true);
        setModal("on");
      });
  }

  if (errorMessage) {
    return (
      <Modal modal={modal} setModal={setModal} errorMessage={errorMessage} />
    );
  }

  return (
    <>
      <Header urlData={urlData} />
      <div id="start-landing">
        <img src="./assets/images/info-min.png" id="info" />
        <img
          src="./assets/images/start button-min.png"
          id="start-button"
          onClick={regigisterApi}
        />
      </div>
      <PinBottom />
    </>
  );
}

export default Startlanding;
