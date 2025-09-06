import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {

  // let my_obj = {
  //   Full_name : "Aman Jangra",
  //   email : "imamanjangra@email.com"
  // }

  return (
   <>
    <Card username = "Anuj" />
    <Card username = "Aman" />
   </>
  )
}

export default App
