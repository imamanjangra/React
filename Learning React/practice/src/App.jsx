import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])
  const [filter, steFilter] = useState("All")

  const clearAll = () => {
    setTasks([])
  }

  const formsbmt = (e) => {
    e.preventDefault()
    if (value.trim() === "") return
    setTasks([{ text: value, completed: false, editable: true }, ...tasks])
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

  const edit = (i) => {
    const iseditText = tasks.map((task, index) => {
      if (index === i) {
        return { ...task, editable: !task.editable }
      } else {
        return task
      }
    })
    setTasks(iseditText)
  }

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("tasks"))
    if (savedTask && savedTask.length > 0) {
      setTasks(savedTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const ChangeValue = (e, i) => {
    let newtaske = [...tasks]
    newtaske[i].text = e.target.value
    setTasks(newtaske)
  }

  const filtered = tasks.filter((task) => {
    if (filter === "All") return true
    if (filter === "Completed") return task.completed
    if (filter === "Pending") return !task.completed
    return true
  })

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-6 bg-gray-50 min-h-screen px-4">
     
      <form 
        onSubmit={formsbmt} 
        className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl justify-center"
      >
        <p className="h-10 sm:h-12 px-3 border rounded-2xl bg-white shadow text-center flex items-center justify-center text-sm sm:text-base font-medium">
          Tasks: {tasks.length}
        </p>
        <input
          type="text"
          className="border h-10 sm:h-12 flex-1 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-lg px-3 shadow-sm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          className="h-10 sm:h-12 px-4 sm:px-6 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-semibold shadow text-sm sm:text-base"
          type="submit"
        >
          Add
        </button>
      </form>

      
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          className={`h-9 px-4 rounded-2xl text-sm sm:text-base shadow 
            ${filter === "All" ? "bg-blue-600 text-white" : "bg-blue-500 hover:bg-blue-400 text-white"}`}
          onClick={() => steFilter("All")}
        >
          All
        </button>
        <button
          className={`h-9 px-4 rounded-2xl text-sm sm:text-base shadow 
            ${filter === "Completed" ? "bg-green-600 text-white" : "bg-green-500 hover:bg-green-400 text-white"}`}
          onClick={() => steFilter("Completed")}
        >
          Completed
        </button>
        <button
          className={`h-9 px-4 rounded-2xl text-sm sm:text-base shadow 
            ${filter === "Pending" ? "bg-yellow-600 text-white" : "bg-yellow-500 hover:bg-yellow-400 text-white"}`}
          onClick={() => steFilter("Pending")}
        >
          Pending
        </button>
      </div>

     
      <ul className="flex flex-col gap-3 w-full max-w-2xl">
        {filtered.map((task, i) => (
          <li
            key={i}
            className="h-auto min-h-12 border rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 w-full">
              <input
                type="checkbox"
                onChange={() => crossTask(i)}
                checked={task.completed}
                className="w-5 h-5 accent-blue-500"
              />

              <input
                className={`flex-1 bg-transparent outline-none text-sm sm:text-lg ${
                  task.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
                value={task.text}
                onChange={(e) => ChangeValue(e, i)}
                readOnly={task.editable}
              />
            </div>

            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                className="h-8 px-3 sm:px-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-white font-medium text-sm sm:text-base"
                onClick={() => edit(i)}
              >
                {task.editable ? "Edit" : "Save"}
              </button>
              <button
                className="h-8 px-3 sm:px-4 rounded-2xl bg-red-500 hover:bg-red-400 text-white font-bold text-sm sm:text-base"
                onClick={() => deleteTask(i)}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      
      {tasks.length > 0 && (
        <button
          className="h-10 sm:h-11 px-4 sm:px-6 border rounded-2xl bg-red-100 hover:bg-red-200 text-red-600 font-semibold shadow text-sm sm:text-base"
          onClick={clearAll}
        >
          Clear All
        </button>
      )}
    </div>
  )
}

export default App
