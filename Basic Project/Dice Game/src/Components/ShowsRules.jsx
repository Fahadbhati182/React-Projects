import React from "react";
import styled from "styled-components";

const ShowsRules = () => {
  return (
    <Container>
      <h3>How to play dice game</h3>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>If you get wrong guess then 2 point will be dedcuted </p>
    </Container>
  );
};

export default ShowsRules;



const Container = styled.div`
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: #FBF1F1;
    padding: 10px;
    border-radius: 10px;
    ;
`
