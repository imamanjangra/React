
import { useState , useEffect , useCallback , useRef  } from 'react'



function Passwordg(){

    const [Length , setLength] = useState(8);
    const [Number_allow , setNumber_allow] = useState(false);
    const [String_allow , setString_allow] = useState(false);
    const [Password , setPassword] = useState("");
    const Password_ref = useRef("");

    const copytoclip = useCallback(()=>{
        window.navigator.clipboard.writeText(Password)
        Password_ref.current?.select();
    }, [Password])

    let Passwordgenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIGKLMNOPQRSTUVWXYXabcdefghigklmnopqrstuvwxyz";

        if(Number_allow){
            str += "1234567890"
        }
        if(String_allow){
            str += "!@#$%^&*"
        }

        for(let i = 0; i<=Length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)

    } , [Length , Number_allow , String_allow , setPassword ])

    useEffect(()=>{
        Passwordgenerator();
    } , [Length , Number_allow , String_allow])


    return(
        <>
        <div className="flex justify-center items-center mx-10 mt-30 ">
            <div className="flex flex-col rounded-2xl h-50 w-140 shadow-2xl bg-white">
                <div className="flex justify-center mt-5">
                    <input className="border w-full mx-5 p-3 rounded-2xl mr-3 "
                     type="text"
                     ref={Password_ref}
                     value={Password}
                     placeholder="Password"
                     readOnly
                  
                      />
                      <button onClick={copytoclip} className="mr-5 px-4 bg-blue-400 text-white rounded-2xl cursor-pointer">Copy</button>
                </div>

                <div className="mt-10 mx-5 flex gap-10">
                    <div className="flex  justify-center items-center gap-2">
                        <input className=""
                            type="range"
                            min={8}
                            max={50}
                            value={Length}
                            onChange={(e)=>{setLength(e.target.value)}}
                        />

                        <label>length : {Length}</label>
                    </div>

                    <div className="flex  justify-center items-center gap-2">
                     <input
                      type="checkbox" 
                      value={Number_allow}
                      onClick={()=>{
                        setNumber_allow((prev) => (!prev));
                      }}
                      />
                      <label >Number</label>
                    </div>

                    <div className="flex  justify-center items-center gap-2">
                     <input
                      type="checkbox" 
                      value={String_allow}
                      onClick={()=>{
                        setString_allow((prev) =>(!prev))
                      }}
                      />
                      <label >Symbole</label>
                    </div>


                </div>
            </div>
        </div>
        </>

    )
}

export default Passwordg