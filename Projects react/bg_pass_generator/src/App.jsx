import { useState } from 'react'
import './App.css'
import Bg_changer from './bg_color'
import Passwordg from './password'

function App() {
  
   const [Color , setColor] = useState("lightblue");

  return (
    <>
    <div className="w-full h-screen" style={{ backgroundColor: Color }}>
      <Bg_changer setColor = {setColor} />
      <Passwordg/> 
    </div>
    
    </>
  )
}

export default App
