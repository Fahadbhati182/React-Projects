import React from "react";
import styled from "styled-components";

const Spinners = () => {
  return (
    <center>
      <SpinnerContainer>
        <div
          className="spinner-border m-5 "
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </SpinnerContainer>
    </center>
  );
};

export default Spinners;

const SpinnerContainer = styled.div`
  margin-top: 100px;
`;
