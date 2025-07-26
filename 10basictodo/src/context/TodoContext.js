import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [                         //prop
        {
            id:1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},                  //methods will just be introduced here
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider