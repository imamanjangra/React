import { useState } from 'react';

import './App.css'

function App() {

  let [count_value , setcount_value] = useState(15)

  function inc_value(){
    console.log('btn was clicked ' + Math.random());
    count_value = count_value + 1;
    setcount_value(count_value)
    
    
  }
  return (
    
    <>
    <h1>Hello, My name is Aman</h1>
    <p>count = {count_value}</p>
    <button onClick={inc_value}>inc. value</button>
    <br />
    <button>dec. value</button>
    </>
  )
}

export default App
