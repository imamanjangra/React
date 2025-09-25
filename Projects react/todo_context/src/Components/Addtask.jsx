
function Addtask() {

    return(
        <>
        <div className="flex border  mt-20 rounded-xl">
            <div>
                <input
                 type="text"
                 placeholder="Write Task ..."
                 className="h-10 w-100 outline-none pl-2" 
                 
                 />
            </div>
            <div>
                <button
                type="submit"   
                className="h-10 w-20 bg-blue-300 rounded-xl shadow-2xl cursor-pointer"
                >
                    Add
                </button>
            </div>
        </div>
        </>
    )
}

export default Addtask