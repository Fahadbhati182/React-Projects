import React from "react";

const Buttons = ({ buttonVal,handleButtonClicked }) => {
  return (
    <div className="d-grid gap-2 d-md-block flex-btn">
      {buttonVal.map((butt) => (
        <button key={butt} className="btn btn-primary cal-button" type="button" onClick={()=>handleButtonClicked(butt)}>
          {butt}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
