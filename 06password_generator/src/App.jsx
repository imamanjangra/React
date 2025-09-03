import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [length , setlength] = useState(8);
  const  [no_allowed , setno_allowed] = useState("fasle");
  const [char_allowed , setchar_allowed] = useState("false");
  const [Password , setpassword] = useState();

  const PasswordGeneration = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXVZabcdefghigklmnopqrstuvwxyz";
    if(no_allowed){
      str += "0123456789";
    }
    if(char_allowed){
      str += "!@#$%^&*";
    }
    
  } , [
    length , no_allowed , char_allowed , setpassword
  ])

  return (
    <>
    <div className='text-white flex flex-col justify-center items-center'>

      <h1 className='text-3xl my-10'>Password Generator</h1>

      <div className='border-2 h-60 w-150 '>

            <div>
                <input type="text" />
            </div>
      </div>

    </div>
    </>
  )
}

export default App
