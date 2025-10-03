import { useParams } from "react-router-dom"
import { useNotes } from "../Contexts"


function NoteDetails(){
    const {id} = useParams() 
    const {Notes} = useNotes()

    const note = Notes.find((n) => n.id == Number(id))

    if(!note){
         return <h2 className="text-center text-red-500 mt-10">Note not found!</h2>;
    }

    return(
        <>
         <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Note Details</h2>
            <p className="text-gray-700">{note.text}</p>
        </div>
        </>
    )
}
export default NoteDetails