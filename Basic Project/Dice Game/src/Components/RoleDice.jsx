import React, { useState } from "react";

const RoleDice = ({ roleDice ,currentDice}) => {
  return (
    <>
      <div onClick={roleDice}>
        <img src={`./Images/dice_${currentDice}.png`} alt="" />
      </div>
      <h3>Click on dice to Roll</h3>
    </>
  );
};

export default RoleDice;
