
import React, { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData();

    // const [git , setgit] = useState("")

    // const profile_link = ``;

    // useEffect(()=>{
    //     let getdata1 = async () => {
            
    //         console.log(data);
    //         setgit(data);
    // }

    // getdata1();


    // } , [])
    

    return(
        <>
        <div className="w-full h-100 flex-col flex justify-center items-center bg-gray-700 text-white">
            <div className="text-4xl font-bold">
                {data.name}
            </div>

            <div className="mt-10 flex justify-center items-center gap-15">
                <div className="h-40 w-40 ">
                    <img src="https://avatars.githubusercontent.com/u/200478760?v=4" alt="image" className="rounded-2xl" />
                </div>
                <div className="w-70 h-auto">
                    {data.bio}
                </div>
            </div>
        </div>
        </>
    )
}

export default Github

export const gitdata = async () =>{
    let request = await fetch("https://api.github.com/users/imamanjangra");
            let data = await request.json();
            return data;
}