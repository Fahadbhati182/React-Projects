import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import styled from "styled-components";
import FilterButtons from "./Components/FilterButtons";
import FoodCards from "./Components/FoodCards";
import { useEffect, useState } from "react";
import Spinners from "./Components/Spinners";
import Error from "./Components/Error";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState();
  const [selectedBtn, setSelectedBtn] = useState();

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("Unable To fetch Data");
      }
    };
    fetchingData();
  }, []);

  if (error) return <Error error={error}></Error>;
  if (loading) return <Spinners></Spinners>;

  const searchData = (e) => {
    const searchValue = e.target.value;

    if (searchValue == "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const handleSelectedButton = (type) => {
    if (type == "All") {
      setFilteredData(data);
      setSelectedBtn("All");
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type)
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo">
            <img src="./Foody Zone.png" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={(e) => searchData(e)}
              placeholder="Search Food.."
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <FilterButtons
            handleSelectedButton={handleSelectedButton}
          ></FilterButtons>
        </FilterContainer>

        <FoodCardsContainer>
          <FoodCards data={filteredData}></FoodCards>
        </FoodCardsContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  height: 180px;
  width: 100%;

  margin: 0, auto;
`;

const TopContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 120px;

  .search {
    input {
      background-color: transparent;
      border: 1px, solid, red;
      border-radius: 5px;
      height: 40px;
      width: 280px;
      padding: 5px;
      font-size: 24px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const FoodCardsContainer = styled.section`
  height: 80vh;
  background-image: url("./bg.png");
  background-size: cover;
`;
