import { useState } from 'react'

import './App.css'
import Addtask from './Components/Addtask'
import ListTodo from './Components/listTodo'

function App() {
 

  return (
    <>
     <div className='bg-[#b2cbf2] w-full h-screen'>
        <div className='flex justify-center items-center'>
        <Addtask/>
        </div>

        <div>
        <ListTodo/>
        
        </div>
     </div>
    </>
  )
}

export default App
