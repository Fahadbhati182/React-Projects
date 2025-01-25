import React from "react";

const TodoMain = ({ todoTasks, todoDate, handleDeleteItems }) => {
  return (
    <div className="container text-center todo-mains ">
      <div className="row text-display">
        <div className="col-4">{todoTasks}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-danger todo-buttons arrange"
            onClick={() => handleDeleteItems(todoTasks)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
