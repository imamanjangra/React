import { useState , useCallback , useEffect, useRef } from 'react'


function App() {
  const [length , setlength] = useCallback(8);
  const  [no_allowed , setno_allowed] = useState(false);
  const [char_allowed , setchar_allowed] = useState(false);
  const [Password , setpassword] = useState("");
  let Password_ref = useRef("");

  const PasswordGeneration = useEffect(()=>{
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXVZabcdefghigklmnopqrstuvwxyz";
    if(no_allowed){
      str += "0123456789";
    }
    if(char_allowed){
      str += "!@#$%^&*";
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass);
  } , [
    length , no_allowed , char_allowed 
  ])

  const copytoclip = useCallback(()=>{
    window.navigator.clipboard.writeText(Password);
    Password_ref.current?.select();// select total in input
    //  Password_ref.current?.setSelectionRange(0, 999);// for specific length
  } , [Password])

  useEffect(()=>{
    PasswordGeneration();
  } , [length , no_allowed , char_allowed , PasswordGeneration])

  return (
    <>
    <div className='flex flex-col justify-center items-center'>

      <h1 className='text-3xl my-10'>Password Generator</h1>

      <div className='shadow-2xl h-60 w-150 rounded-2xl px-5'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 border mt-5'>
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={Password_ref}
        />
        <button onClick={copytoclip} className='bg-blue-400 text-white px-3' >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 '>
            <div className='flex items-center gap-x-1 mt-5'>
              <input 
              type="range"
              value={length}
              min={6}
              max={100}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
                />
            <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1 mt-5 ml-10">
            <input
               type="checkbox"
               defaultChecked={no_allowed}
                id="numberInput"
                onChange={()=>{
                  setno_allowed((prev) => (!prev))
                }}
                />
            <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1 mt-5 ml-5">
            <input
               type="checkbox"
               defaultChecked={char_allowed}
               id="characterInput"
               onClick={()=>{
                setchar_allowed((prev) =>(!prev))
               }}
                />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
           
      </div>

    </div>
    </>
  )
}

export default App
