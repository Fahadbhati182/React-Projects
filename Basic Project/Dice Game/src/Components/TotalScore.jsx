import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

export const Container = styled.div`
  h1 {
    font-size: 90px;
    line-height: 70px;
    font-weight: 700;
  }
  p {
    font-size: 32px;
  }
`;
