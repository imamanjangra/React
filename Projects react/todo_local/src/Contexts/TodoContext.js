import { createContext , useContext } from "react";// This is same for all context 


export const TodoContext  = createContext({// This line is also same 
    todos : [
        {
            id : 1,
            todo : "Todo msg",              // first values of context 
            Compeleted : false,
        }
    ],

    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},                  // second methodes and what they want 
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})


export const useTodo = () => {
    return useContext(TodoContext)              // THis syntex is same for all 
}

export const TodoProvider = TodoContext.Provider     // Same for all context 