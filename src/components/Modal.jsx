import Header from "./Header";

function Modal({ modal, setModal, errorMessage }) {
  if (modal == "on") {
    return (
      <>
        <div className="popup">
          <div className="pop-container">
            <div className="my-games-modal">
              <img src="./assets/images/help-popup-min.png" />
              <div className="help-content-pic">
                {errorMessage ? (
                  <p className="network-error-message">خطا در شبکه</p>
                ) : (
                  <>
                    <img src="./assets/images/help-min.png" />
                    <a href="https://faqchallenge.quizofkings.com?challenge_name=MedalOfHonor"><img src="./assets/images/faq-btn-min.png" /></a>
                  </>
                )}
              </div>
            </div>
            <div
              className="close-button"
              onClick={() => {
                setModal("off");
              }}
            >
              <img src="./assets/images/close button-min.png" />
            </div>
          </div>
        </div>
        <Header setModal={setModal} />
      </>
    );
  }
}

export default Modal;
