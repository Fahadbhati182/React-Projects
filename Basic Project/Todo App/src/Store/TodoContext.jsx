import { createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  handleDeleteItem: () => {},
  handleNewItems: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    // const newTodoItems = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     date: itemDueDate,
    //   },
    // ];
    // setTodoItems(newTodoItems);
    //! This will ensure that the method will always get the current value ....
    // setTodoItems((currVal) => [
    //   ...currVal,
    //   {
    //     name: itemName,
    //     date: itemDueDate,
    //   },
    // ]);
  };
  function todoItemsReducer(currTodoItems, action) {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        {
          name: action.payload.itemName,
          date: action.payload.itemDueDate,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    }
    return newTodoItems;
  }

  const handleDeleteItem = (todoItem) => {
    // const newItems = todoItems.filter((item) => item.name !== todoItem);
    // setTodoItems(newItems);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItem,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoContext.Provider
      value={{ todoItems, handleDeleteItem, handleNewItems }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
