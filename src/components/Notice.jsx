import { useState } from "react";
import MatchItem from "./MatchItem";

function Notice({ landingData }) {
  const [modal, setModal] = useState("off");
  if (modal == "on") {
    return (
      <>
        <div className="popup">
          <div className="pop-container">
            <div className="my-games-modal">
              <img src="./assets/images/my games popup-min.png" />
            </div>
            <div
              className="close-button"
              onClick={() => {
                setModal("off");
              }}
            >
              <img src="./assets/images/close button-min.png" />
            </div>
            <div className="match-container">
              {landingData.games.map((i, index) => {
                return (
                  <MatchItem
                    landingData={landingData}
                    gamesIndex={index}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="ok-button">
              <img
                src="./assets/images/ok button-min.png"
                onClick={() => {
                  setModal("off");
                }}
              />
            </div>
          </div>
        </div>
        <div id="notice">
          <img src="./assets/images/notice-min.png" className="notice-image" />
        <img
          src="./assets/images/my games button-min.png"
          className="my-game-button"
          onClick={() => {
            setModal("on");
          }}
        />
        </div>
      </>
    );
  } else {
    return (
      <div id="notice">
        <img src="./assets/images/notice-min.png" className="notice-image" />
        <div className="my-games-random-game-button-container">
            <img
              src="./assets/images/my games button-min.png"
              className="my-game-button"
              onClick={() => {
                setModal("on");
              }}
            />
            <a href="qokdp://lnk?INGAME!pvp">
              <img
                src="./assets/images/start-pvp-btn-min.png"
                className="my-game-button"
              />
            </a>
          </div>
      </div>
    );
  }
}

export default Notice;
