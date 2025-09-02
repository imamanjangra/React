import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='flex-col flex justify-center items-center ' >
      <div className='bg-blue-400 h-39 w-42'></div>
      <div>
        <p>This is a blue color</p>
      </div>

   </div>
   </>
  )
}

export default App
