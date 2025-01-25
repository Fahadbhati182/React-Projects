import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../App";

const FoodCards = ({ data }) => {
  // const temp = [
  //   {
  //     name: "Boilded Egg",
  //     price: 10,
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     image: "/images/egg.png",
  //     type: "breakfast",
  //   }
  // ];

  console.log(data);
  return (
    <center>
      <FoodContainer>
        {data?.map((food) => (
          <Cards key={food.name}>
            <div className="food-img">
              <img src={BASE_URL + food.image} />
            </div>
            <div className="food-info">
              <div>
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
            </div>
            <button type="button" className="btn btn-danger btn-wall ">
              ${food.price}
            </button>
          </Cards>
        ))}
      </FoodContainer>
    </center>
  );
};

export default FoodCards;

const FoodContainer = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const Cards = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
      width: 50px;
    }

    .btn-wall{
        width: 80px;
        height: 50px;
    }
  }
`;
