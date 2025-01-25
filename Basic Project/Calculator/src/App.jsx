import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Title from "./Components/Title";
import InputFeild from "./Components/InputFeild";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
  const buttonVal = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "=",
    "0",
    "/",
    "C",
    "D",
    "Ne",
  ];

  const [input, setInput] = useState("");

  const handleButtonClicked = (butt) => {
    if (butt === "C") {
      setInput("");
    } else if (butt === "D") {
      const newInput = input.slice(0, -1);
      setInput(newInput);
    } else if (butt === "Ne") {
      let newInput = input * -1;
      setInput(newInput);
    } else if (butt === "=") {
      const newInput = eval(input);
      setInput(newInput);
    } else {
      const newInput = input + butt;
      setInput(newInput);
    }
  };

  return (
    <>
      <center>
        <Title></Title>
        <div className="container">
          <InputFeild inputs={input}></InputFeild>
          <Buttons
            buttonVal={buttonVal}
            handleButtonClicked={handleButtonClicked}
          ></Buttons>
        </div>
      </center>
    </>
  );
}

export default App;
