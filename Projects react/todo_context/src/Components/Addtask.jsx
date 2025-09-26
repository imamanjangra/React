import { useState } from "react"
import { useTodo } from "../Contexts/Todo_Context";

function Addtask() {
    const [todo , setTodo] = useState("");

    const {addTodo} = useTodo()

   const add = (e) => {
    e.preventDefault()
    if(todo != ""){

        addTodo({ todoMsg: todo })
    }else{
        alert("Enter task ")
    }
    setTodo("")
   }


    return(
        <>
        <form onSubmit={add}>
        <div className="flex border  mt-20 rounded-xl">
            <div>
                <input
                 type="text"
                 value={todo}
                 placeholder="Write Task ..."
                 className="h-10 w-100 outline-none pl-2" 
                 onChange={(e) => setTodo(e.target.value)}
                 
                 />
            </div>
            <div>
                <button
                type="submit"   
                className="h-10 w-20 bg-blue-300 rounded-xl shadow-2xl cursor-pointer"
                >
                    Add
                </button>
            </div>
        </div>
        </form>
        </>
    )
}

export default Addtask