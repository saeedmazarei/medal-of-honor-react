function MatchItem({ landingData, gamesIndex }) {
  const onStar = [];
  const offStar = [];
  for (let i = 0; i < landingData.games[gamesIndex].gained_stars; i++) {
    onStar.push(1);
  }
  for (let j = 0; j < 5 - landingData.games[gamesIndex].gained_stars; j++) {
    offStar.push(0);
  }
  return (
    <>
      <div className="match-item">
        <span className="opponent-name">
          {landingData.games[gamesIndex].opponent_name}
        </span>
        {landingData.games[gamesIndex].gained_stars == 5 ? (
          <span className="match-result">بازی بدون اشتباه</span>
        ) : landingData.games[gamesIndex].status == "Lost" ? (
          <span className="match-result">باختی</span>
        ) : landingData.games[gamesIndex].status == "Draw" ? (
          <span className="match-result">مساوی</span>
        ) : landingData.games[gamesIndex].status == "Expire" ? (
          <span className="match-result">منقضی</span>
        ) : (
          <span className="match-result result">
            <span>{landingData.games[gamesIndex].user_game_score}</span>-
            <span>{landingData.games[gamesIndex].opponent_game_score}</span>{" "}
            بردی
          </span>
        )}
        <div className="star-container">
          {onStar.map(() => {
            return (
              <img
                src="./assets/images/medal on-min.png"
                className="off-medal"
              />
            );
          })}
          {offStar.map(() => {
            return (
              <img
                src="./assets/images/medal off-min.png"
                className="off-medal"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MatchItem;
