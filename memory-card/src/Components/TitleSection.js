import React from "react";

export function TitleSection(props) {
  const {
    bestScore,
    currentScore,
    clickBolean,
    // setbestScore,
    // setCurrentScore,
} = props;

const whatisclickbolean = () => {
  console.log({clickBolean});
}

  return (
    <div className="TitleAreaContainer">
    <div className="TitleSectionText">
      <h1>Foodie Memory Game</h1>
      <button onClick={whatisclickbolean}>yo</button>
      <h2>How to Play</h2>
      <ul>
        <li>Don't touch the same image twice</li>
        <li>You can touch the same position twice as long as its a new image</li>
        <li>Highest Possible Score is 12</li>
      </ul>
    </div>
    <div className="ScoreArea">
    <p>Best Score: {bestScore}</p>
    <p>Current Score: {currentScore}</p>
    </div>
    </div>
  );
}
