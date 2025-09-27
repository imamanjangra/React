import { useEffect, useState } from 'react'

import './App.css'
import Addtask from './Components/Addtask'
import ListTodo from './Components/listTodo'
import { TodoProvider } from './Contexts/Todo_Context'

function App() {
  // set all methode here 
  const [Todos , setTodos] = useState([]);

  const addTodo = (todoMSg) => {
    setTodos((prev) => [{id: Date.now() , ...todoMSg} , ...prev])
  }

  const EditTodo = (id , todoMsg) => {
    setTodos((prev) => (prev.map((prevTodo) => (prevTodo.id == id ? todoMsg : prevTodo))))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((del_item) => (del_item.id != id))))
  }

  const statusTodo = (id) => {
    setTodos((prev) => ((prev.map((prevTodo) => (prevTodo.id == id ? {...prevTodo , Compeleted:!prevTodo.Compeleted} : prevTodo)))))
  }
 
  useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("Todos"))
  if (todos && todos.length > 0) {   // ✅ check localStorage value
    setTodos(todos)                  // ✅ set state from localStorage
  }
}, [])

useEffect(() => {
  localStorage.setItem("Todos", JSON.stringify(Todos))
}, [Todos])

  

  return (
    <TodoProvider value={{Todos , addTodo , EditTodo , deleteTodo , statusTodo}}> 
     <div className='bg-[#b2cbf2] w-full h-screen'>
        <div className='flex justify-center items-center'>
        <Addtask/>
        </div>

        <div>
          {
            Todos.map((todo) => (
              <div key={todo.id}>
                 <ListTodo todo={todo}/>
              </div>
            ))
          }
       
        </div>
     </div>
    </TodoProvider>
  )
}

export default App
