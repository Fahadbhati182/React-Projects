import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    toggleCompleted: (id) => { },
    deleteTodo: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;