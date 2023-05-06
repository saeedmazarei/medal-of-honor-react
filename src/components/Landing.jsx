import { useState, useEffect, useContext } from "react";

import { Navigate } from "react-router-dom";

import { getLandingData } from "../js/apis";
import Progressbar from "./Progressbar";
import Loading from "./Loading";
import Header from "./Header";
import Notice from "./Notice";
import context from "./UserContext";
import hashContext from "./HashContext";
import Modal from "./Modal";
import PinBottom from "./PinBottom";

function Landing({urlData}) {
  const [landingData, setLandingData] = useState();
  const [loadingStatus, setloadingStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modal, setModal] = useState("off");
  const hashId = useContext(hashContext);
  useEffect(() => {
    getLandingData(hashId)
      .then((result) => {
        setLandingData(result.data.data);
        console.log(result.data);
        setloadingStatus(false);
      })
      .catch((error) => {
        setErrorMessage(true);
        setModal("on");
        console.log(error.message);
        setloadingStatus(false);
      });
  }, []);

  if (errorMessage) {
    return (
      <Modal modal={modal} setModal={setModal} errorMessage={errorMessage} />
    );
  }

  if (loadingStatus) {
    return <Loading />;
  }
  return (
    <>
      {landingData.registered ? (
        <>
          <Header setModal={setModal} urlData={urlData} />
          <Modal modal={modal} setModal={setModal} />
          <div className="landing">
            <Notice landingData={landingData} />
            <context.Provider value={landingData}>
              <Progressbar />
            </context.Provider>
            <PinBottom />
          </div>
        </>
      ) : (
        <Navigate replace to="/register" />
      )}
    </>
  );
}

export default Landing;
