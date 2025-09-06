function Password_generator(){


    return(

        <>
        <div className="flex justify-center items-center mx-10 mt-30 ">
            <div className="flex flex-col rounded-2xl h-50 w-140 shadow-2xl bg-white">
                <div className="flex justify-center mt-5">
                    <input className="border w-full mx-5 p-3 rounded-2xl mr-3 "
                     type="text"
                     placeholder="Password"
                     readOnly
                      />
                      <button className="mr-5 px-4 bg-blue-400 text-white rounded-2xl cursor-pointer">Copy</button>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
        </>

    )
}

export default Password_generator