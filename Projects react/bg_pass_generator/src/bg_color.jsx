



function  Bg_changer({setColor}){

   


    return(

    <>
  
    <div className="flex  justify-center items-center">
        <div className="flex p-3 gap-5 bg-white text-white flex-wrap mt-10 rounded-2xl">
            <button onClick={() => {setColor("pink")}} className="bg-pink-300 rounded-2xl px-2 py-2">Pink</button>
            <button onClick={() => {setColor("lightgreen")}} className="bg-green-300 rounded-2xl px-2 py-2">Green</button>
            <button onClick={() => {setColor("yellow")}} className="bg-yellow-500 rounded-2xl px-2 py-2">Yellow</button>
            <button onClick={() => {setColor("purple")}} className="bg-purple-500 rounded-2xl px-2 py-2">Purple</button>
            <button onClick={() => {setColor("black")}} className="bg-black rounded-2xl px-2 py-2">Black</button>
            
        </div>
    </div>
   
    </>

    )
}

export default Bg_changer