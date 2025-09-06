import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color , setColor] = useState("#ADD8E6");
  
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>

        <div className='flex flex-wrap justify-center '>
          <div className='flex flex-wrap justify-center bg-white gap-10 p-2 rounded-2xl mt-10'>
            <button onClick={()=> setColor("red")} className='bg-red-500 p-2 rounded-2xl'>Red</button>
            <button onClick={()=> setColor("green")} className='bg-green-500 p-2 rounded-2xl'>Green</button>
            <button onClick={()=>setColor("pink")} className='bg-pink-500 p-2 rounded-2xl'>Pink</button>
            <button onClick={()=>setColor("orange")} className='bg-orange-500 p-2 rounded-2xl'>Orange</button>
            <button onClick={()=>setColor('purple')} className='bg-purple-500 p-2 rounded-2xl'>Purple</button>
          </div>
        </div>

       </div>
    </>
  )
}

export default App
