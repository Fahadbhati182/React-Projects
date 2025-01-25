import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "./MainDisplay";

const HomeDicePage = ({ setIsSelected }) => {
  return (
    <div className="home-container">
      <img src="./Images/diceBg.png" />
      <div className="flex">
        <h1 className="heading">DICE GAME</h1>
        <Button
          onClick={() => setIsSelected(true)}
          type="button"
          className="btn btn-dark btn-lg home-btn"
        >
          Play Game
        </Button>
      </div>
    </div>
  );
};

export default HomeDicePage;
