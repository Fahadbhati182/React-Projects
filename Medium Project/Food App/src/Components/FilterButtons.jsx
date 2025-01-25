import React from "react";
import styled from "styled-components";

const FilterButtons = ({ handleSelectedButton }) => {
  const buttons = ["All", "Breakfast", "Lunch", "Dinner"];
  return (
    <Container>
      {buttons.map((items, i) => (
        <button
          onClick={() => handleSelectedButton({ items })}
          type="button"
          key={i}
          className="btn btn-danger my-btn"
        >
          {items}
        </button>
      ))}
    </Container>
  );
};

export default FilterButtons;

const Container = styled.div`
  .my-btn {
    margin: 10px;
  }
`;
