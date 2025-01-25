import React from "react";

const ErrorMessage = () => {
  return (
    <center>
      <div
        className="alert alert-secondary text-center"
        style={{ margin: "20px", fontSize: "30px" }}
        role="alert"
      >
        Unable To Fetch Data
      </div>
    </center>
  );
};

export default ErrorMessage;
