import React from "react";
import TotalScore from "./TotalScore";
import NumberOptions from "./NumberOptions";
import styled from "styled-components";

const Header = ({
  error,
  setError,
  score,
  selectedNumber,
  setSelectedNumber,
}) => {
  return (
    <Container>
      <TotalScore score={score}></TotalScore>
      <NumberOptions
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      ></NumberOptions>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px;
`;
