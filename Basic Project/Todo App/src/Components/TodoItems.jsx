import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoMain from "./TodoMain";

const TodoItems = ({ todoItems, handleDeleteItems }) => {
  return (
    <div>
      {todoItems.map((items, keys) => (
        <TodoMain
          key={keys}
          todoTasks={items.tasks}
          todoDate={items.date}
          handleDeleteItems={handleDeleteItems}
        ></TodoMain>
      ))}
    </div>
  );
};

export default TodoItems;
