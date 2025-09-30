import {  useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])
 
  
  const clearAll = () => {
    setTasks([])
  }
  
console.log(tasks)


  

  const formsbmt = (e) => {
    e.preventDefault()
    if (value.trim() === "") return
    setTasks([ { text: value, completed: false }, ...tasks])
    setValue("")
  }

  const deleteTask = (i) => {
    const newTask = tasks.filter((_, index) => index !== i)
    setTasks(newTask)
  }

  const crossTask = (i) => {
    const compTask = tasks.map((task, index) => {
      if (index === i) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(compTask)
  }

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("tasks"))
    if(savedTask && savedTask.length > 0){
      setTasks(savedTask)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    
  } , [tasks])

  


  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-10'>
      <form onSubmit={formsbmt} className='flex gap-5'>
        <p className='h-12 px-3 border rounded-2xl text-center flex items-center' >No of task = {tasks.length} </p>
        <input
          type="text"
          className='border h-12 w-72 rounded-2xl hover:bg-blue-50 text-2xl pl-2'
          value={value}
         onChange={(e) => setValue(e.target.value)}
        />
        <button
          className='h-12 px-5 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-bold'
          type='submit'
        >
          Add
        </button>
      </form>

      <ul className='flex flex-col gap-3 w-72'>
        {tasks.map((task, i) => (
              <li
                key={i}
                className='h-12 border rounded-2xl flex items-center justify-between px-3 bg-white shadow'
              >
                <div className='flex items-center gap-2'>
                   <input
                    type='checkbox'
                    onChange={() => crossTask(i)}
                    checked={task.completed}
                    className='w-5 h-5 accent-blue-500'
                  />

                  <span
                    className={`text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                    
                  >
                    {task.text}
                  </span>

                </div>

                <div className='flex gap-2'>
                  <button
                    onClick={() => Edittask(i)}
                    className='h-8 px-3 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-white font-semibold'
                  >

                    Edit
                  </button>
                  <button
                    className='h-8 px-3 rounded-2xl bg-red-500 hover:bg-red-400 text-white font-bold'
                    onClick={() => deleteTask(i)}
                  >
                    X
                  </button>
                </div>
      </li>

        ))}
      </ul>
      <button  className='h-10 px-3 border rounded-2xl'
      onClick={clearAll}
      >Clear ALL</button>
    </div>
  )
}

export default App
