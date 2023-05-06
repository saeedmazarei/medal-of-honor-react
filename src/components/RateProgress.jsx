function RateProgress(props) {
  return (
    <>
      <span className="gold-number" id={`${props.classname}-gold-number`}>
        {props.coinsNumber}
      </span>
      <img
        id={`${props.classname}-rate-pic`}
        src="./assets/images/medal on-min.png"
      />
    </>
  );
}

export default RateProgress;
