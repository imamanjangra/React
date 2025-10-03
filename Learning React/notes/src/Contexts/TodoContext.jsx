import { createContext , useContext, useState } from "react";

export const TodoContex = createContext()

export const useNotes = () => {
  return  useContext(TodoContex)
}

export function NotesProvider({children}){
    const [Notes , setNotes] = useState([]);

     const addNotes = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev]);
  };

    const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((data) => data.id != id))
  }

    return (
  <TodoContex.Provider value={{ Notes, addNotes, deleteNotes }}>
      {children}
    </TodoContex.Provider>
  );
}