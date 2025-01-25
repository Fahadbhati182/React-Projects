import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import Header from "./Components/Header";
import TodoHeader from "./Components/TodoHeader";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddItems = (todoName, todoDate) => {
    const newItems = [
      ...todoItems,
      {
        tasks: todoName,
        date: todoDate,
      },
    ];
    setTodoItems(newItems);
  };

  const handleDeleteItems = (todoName) => {
    const newItems = todoItems.filter((items) => items.tasks != todoName);
    setTodoItems(newItems);
  };

  return (
    <>
      <center>
        <div className="container">
          <Header></Header>
          <TodoHeader handleAddItems={handleAddItems}></TodoHeader>

          {todoItems.length == 0 ? (
            <WelcomeMessage></WelcomeMessage>
          ) : (
            <TodoItems
              handleDeleteItems={handleDeleteItems}
              todoItems={todoItems}
            ></TodoItems>
          )}
        </div>
      </center>
    </>
  );
}

export default App;
