import React from "react";
import styled from "styled-components";

const Error = ({ error }) => {
  return (
    <center>
      <ErrorContainer>
        <div className="alert alert-danger" role="alert">
          {error}!!
        </div>
      </ErrorContainer>
    </center>
  );
};

export default Error;

const ErrorContainer = styled.div`
  margin-top: 100px;
  font-size: 40px;
  height: 100px;
  width: 500px;
`;
