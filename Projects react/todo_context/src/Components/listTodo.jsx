  import { useState } from "react";
  import { useTodo } from "../Contexts/Todo_Context";

  function ListTodo({ todo }) {
    const [todoMsg, settodoMsg] = useState(todo.todoMsg);
    const [editable , setEditable] = useState(false)
    const {EditTodo ,deleteTodo, statusTodo} = useTodo()
    
    const EditTodomsg = () => {
    EditTodo(todo.id, { ...todo, todoMsg });
      setEditable(false)
    }

    const statusTodoOK = () => {

      statusTodo(todo.id)
    }

    return (
      <div className="flex justify-center mt-10">
        <div className="flex items-center justify-between w-[500px] px-4 py-2 border rounded-xl shadow-sm">
          
          {/* Left side (checkbox + text) */}
          <div className="flex items-center gap-3">
            <input 
            checked={todo.Compeleted || false}
            onChange={statusTodoOK}
            type="checkbox" 
            className="w-5 h-5" />

            <input   // ✅ was "imput" before (typo)
              value={todoMsg}
              readOnly = {!editable}
              className={`outline-none text-lg ${todo.Compeleted ? "line-through text-gray-500" : ""}`}
              onChange={(e) => settodoMsg(e.target.value)}

            />
          </div>

          {/* Right side (buttons) */}
          <div className="flex items-center gap-4">
            <button 
            className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => {
              if(editable){
                EditTodomsg()
              }
              else
              {
                setEditable((prev) => (!prev))
              }
            }}
            >

              {editable ? "Save" : "Edit"}

            </button>
            
            <button 
            onClick={() => deleteTodo(todo.id)}
            className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600">
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default ListTodo;
