import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 20, text: "HELLO WORLD" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;  // Destructure the payload
            const todo = state.todos.find((todo) => todo.id === id);  // Find the existing todo

            if (todo) {
                todo.text = text;  // Update the text
            }
        }

    }
})

export const todoActions = todoSlice.actions

export default todoSlice;