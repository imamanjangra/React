import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'

function MYapp(){
    return(
        <h1>custom react</h1>
    )
}

const another_Element = (
    <a href="https://google.com" target = "_blank">click on it </a>
)

createRoot(document.getElementById('root')).render(

   
    another_Element
  
  
)
