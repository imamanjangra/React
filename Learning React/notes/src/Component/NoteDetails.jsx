import { useParams } from "react-router-dom";
import { useNotes } from "../Contexts";
import { useState, useRef, useEffect } from "react";

function NoteDetails() {
  const { id } = useParams();
  const { Notes , EditNotes  , deleteNotes} = useNotes();
  const [Editable , setEditable ] = useState(true);
  
  const note = Notes.find((n) => n.id === Number(id));
  const [update , setUpdate] = useState(note ? note.text : "");

  const textareaRef = useRef(null);

  // Auto-expand textarea whenever text changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; // grow with content
    }
  }, [update]);

  if (!note) {
    return <h2 className="text-center text-red-500 mt-10">Note not found!</h2>;
  }

  const updateText = () => {
    EditNotes({ text: update }, Number(id));
    setEditable(!Editable);
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8">
      {/* Header with Buttons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-600">Note Details</h2>
        <div className="flex space-x-3">
          <button 
            onClick={updateText}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
            {Editable ? "Edit": "save"}
          </button>
          <button
          onClick={() => deleteNotes(note.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200">
            Delete
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
            Copy
          </button>
        </div>
      </div>

      {/* Note Content */}
      <div className="border-t pt-4">
        <textarea
          ref={textareaRef}
          className="w-full text-gray-700 text-lg leading-relaxed bg-transparent border-none focus:outline-none resize-none cursor-default"
          value={update}
          readOnly={Editable}
          onChange={(e)=> setUpdate(e.target.value)}
          style={{ overflow: "hidden" }} // prevents scrollbar
        />
      </div>
    </div>
  );
}

export default NoteDetails;
