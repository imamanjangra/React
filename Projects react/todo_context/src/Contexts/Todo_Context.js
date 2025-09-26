import { createContext , useContext } from "react"; // 1st step 

export const TodoContexts = createContext({     // 2ns step 
    Todos : [
        {
            id : 1,
            todoMsg : "Sample text !",
            Compeleted : false
        }
    ],
    
     addTodo : (todoMsg) => {},
     EditTodo : (id , todoMsg ) => {},
     deleteTodo : (id) => {},                   // Methodes all use in 
     statusTodo : (id) => {},
})

export const useTodo = () => {  // 3rd step 
   return useContext(TodoContexts)
}

export const TodoProvider = TodoContexts.Provider // 4th step 





