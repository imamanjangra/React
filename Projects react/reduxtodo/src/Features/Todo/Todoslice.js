import { createSlice , nanoid } from "@reduxjs/toolkit";// same 

const initialState = {          // same 
    todos : [{text: "hello" , id : 1}]
}

export const TodoSlice = createSlice({      // same 
    name : 'todo',
    initialState , 
    reducers: {
        addTodo : (state , action ) => {
            const todo = {
                id : nanoid(),
                 text : action.payload
            }
            state.todos.push(todo)
        },

        removeTodo : (state , action) => {
            state.todos  = state.todos.filter((todo) => todo.id != action.payload)
        },

       editTodo: (state, action) => {
  state.todos = state.todos.map((todo) =>
    todo.id === action.payload.id
      ? { ...todo, text: action.payload.text }
      : todo
  );
}


        

    }
})

export const {addTodo , removeTodo , editTodo } = TodoSlice.actions

export default TodoSlice.reducer