import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This is imp. question of react n interview what is the outcome after run 
// ans. = This can not inc the value of count direct 5 this inc. only one because of fiber algorithm,   usestate send update 
      //  into baches 

function App() {
  const [count, setCount] = useState(0)

  const add_value = ()=>{
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);  q) what is output = inc. 1
    // setCount(count + 1);   not otmize approch 
    // setCount(count + 1);

    // use this 

    setCount((preCount)=>preCount + 1)
    setCount((preCount)=>preCount + 1)// not use {} this braket becaue this return value and usestate olly take function not return value 
    setCount((preCount)=>preCount + 1)// this take prvious value and inc one so it's not a bach so output is = 3
    
  }

  return (
    <>
    <button onClick={add_value}>inc value </button>
    <h1>count value = {count}</h1>
    </>
  )
}

export default App
