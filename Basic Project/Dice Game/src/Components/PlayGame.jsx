import React, { useState } from "react";
import Header from "./Header";
import MainDisplay from "./MainDisplay";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please Select any Number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (randomNumber == selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <div>
      <Header
        setSelectedNumber={setSelectedNumber}
        score={score}
        selectedNumber={selectedNumber}
        error={error}
        setError={setError}
      ></Header>
      <MainDisplay
        setScore={setScore}
        roleDice={roleDice}
        currentDice={currentDice}
      ></MainDisplay>
    </div>
  );
};

export default PlayGame;
