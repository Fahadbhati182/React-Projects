import React, { useContext, useRef } from "react";

const TodoHeader = ({ handleAddItems }) => {
  const todoTaskElement = useRef();
  const todoDateElement = useRef();

  const handleOnADD = () => {
    const todoName = todoTaskElement.current.value;
    const todoDate = todoDateElement.current.value;

    handleAddItems(todoName, todoDate);

    console.log(todoName);
    console.log(todoDate);
    todoTaskElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <div className="todo-header">
      <div className="container text-center ">
        <div className="row">
          <div className="col-4">
            <input type="text" className="todo-items" ref={todoTaskElement} />
          </div>
          <div className="col-4">
            <input type="date" className="todo-items" ref={todoDateElement} />
          </div>
          <div className="col-2">
            <button
              onClick={handleOnADD}
              type="button"
              className="btn btn-success todo-buttons arrange "
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
