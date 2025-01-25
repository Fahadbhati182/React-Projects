import styled from "styled-components";

const NumberOptions = ({
  setError,
  selectedNumber,
  setSelectedNumber,
  error,
}) => {
  const buttons = ["1", "2", "3", "4", "5", "6"];

  const handleError = (value) => {
    setSelectedNumber(value);
    setError(" ");
  };
  return (
    <>
      <div>
        <Container>
          <p>{error}</p>
          <div>
            {buttons.map((items) => (
              <Box
                isSelected={items == selectedNumber}
                type="button"
                key={items}
                className={"btn btn-dark select-btn btn-lg"}
                onClick={(items) => handleError(items)}
              >
                {items}
              </Box>
            ))}
          </div>
          <div className="tag">Select Number</div>
        </Container>
      </div>
    </>
  );
};

export default NumberOptions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .tag {
    font-size: 25px;
    margin-top: 10px;
    margin-right: 12px;
    font-weight: 600;
  }

  p {
    color: red;
    font-size: 25px;
    line-height: 10px;
    margin-right: 12px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
