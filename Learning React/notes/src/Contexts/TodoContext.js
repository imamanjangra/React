import { createContext , useContext } from "react";

export const TodoContex = createContext({

    Notes : [
        {
            text : "sample test ",
            id: 1
        }
    ],

    addNotes : (text)=> {},
    deleteNotes : (id) => {},
    EditMode: (id , text) => {}
})

export const useNotes = () => {
  return  useContext(TodoContex)
}

export const NotesProvider = TodoContex.Provider