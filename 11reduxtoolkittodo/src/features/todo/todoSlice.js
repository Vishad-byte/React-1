import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Complete your work"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {                 //states are updated through the reducers
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)                 //to update our state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)             //automatically gives all the todos except the one to delete
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id == id )
            if(todo){
                todo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer              //exported for the store so that store could update values through these reducers onlyy