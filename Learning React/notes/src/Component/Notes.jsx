
import { useState } from "react";
import { NotesProvider } from "../Contexts";
import InputNotes from "./InputNotes";



function Notes() {
  // Sample notes (static)
 
  const [Notes , setNotes] = useState([])

  const addNotes = (text) => {
    setNotes((prev) => [{id: Date.now() , ...text} , ...prev])
  }
  const deleteNotes = (id) => {}
  const EditMode= (id , text) => {}

  return (
    <NotesProvider value={{Notes , addNotes , deleteNotes , EditMode}}>
    <div className="max-w-4xl mx-auto">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Notes Dashboard
      </h2>
      <InputNotes/>
      {/* Add Note Section */}
     

      {/* Notes List Section */}
      <h3 className="text-2xl font-semibold mb-6 text-gray-700">
        Your Created Notes
      </h3>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Notes.map((note , index) => (
          <div key={index}>
            <InputNotes note={note}/>
          </div>
        ))}
       </div>
      
    </div>
    </NotesProvider>
  );
}

export default Notes;
