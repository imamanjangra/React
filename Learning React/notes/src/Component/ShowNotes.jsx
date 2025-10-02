import { useState } from "react"

function ShowNotes({note}) {

const [NoteText , setNodeText] = useState(note.text)

    return(
        <>
       
       
          <div
           
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
           <input type="text"
           className="text-gray-800 font-medium"
           value={note.text}
           onChange={(e) => setNodeText(e.target.value)}
           />
            <div className="mt-4 flex justify-end">
              <button
               
               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                Delete
              </button>
            </div>
          </div>
       
    
        </>
    )
}

export default ShowNotes