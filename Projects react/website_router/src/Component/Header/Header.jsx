
import { NavLink } from "react-router-dom"

function Header(){


    return(
        <>
            <div className=" flex items-center justify-around  py-6 bg-[#181818] text-white shadow-white" >
                <div>
                    Logo
                </div>

                <div >
                    <ul className="flex items-center gap-30">

                        <li>
                            <NavLink 
                            
                            className={()=>{``}}
                            
                            >
                                Male
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink 
                            
                            className={()=>{``}}
                            
                            >
                                Female
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            
                            className={()=>{``}}
                           
                            >
                                 Sports
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    Github
                </div>
            </div>
        </>
    )
}

export default Header