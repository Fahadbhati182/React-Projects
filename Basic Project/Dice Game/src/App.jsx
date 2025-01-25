import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomeDicePage from "./Components/HomeDicePage";
import { useState } from "react";
import PlayGame from "./Components/PlayGame";

function App() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <center>
        {isSelected == true ? (
          <PlayGame></PlayGame>
        ) : (
          <HomeDicePage setIsSelected={setIsSelected}></HomeDicePage>
        )}
      </center>
    </>
  );
}

export default App;
