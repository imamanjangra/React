import { useState } from 'react'
import AddTodo from "./Components/AddTodo"


import './App.css'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo />
    <Todos/>
    </>
  )
}

export default App
