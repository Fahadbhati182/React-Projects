import React, { useState } from "react";
import ShowsRules from "./ShowsRules";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const MainDisplay = ({ roleDice, currentDice, setScore }) => {
  const [isShowRules, setIsShowRules] = useState(false);

  const handleReset = () => {
    setScore(0);
  };

  return (
    <>
      <div>
        <RoleDice roleDice={roleDice} currentDice={currentDice}></RoleDice>
      </div>

      <Container>
        <Button
          onClick={handleReset}
          type="button"
          className="btn btn-dark btn-lg main-btn"
        >
          Reset Game
        </Button>
        <OutlineButton
          onClick={(prev) => setIsShowRules((prev) => !prev)}
          type="button"
          className="btn btn-dark btn-lg main-btn "
        >
          {isShowRules ? "Hide" : "Show"} Rules
        </OutlineButton>
        {isShowRules && <ShowsRules />}
      </Container>
    </>
  );
};

export default MainDisplay;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
