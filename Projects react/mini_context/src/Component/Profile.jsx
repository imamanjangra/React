import React , {useContext} from "react";
import UserContext from "../Context/Usercontext";

 
function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>Plese Login</div>

    return <div>Wwlcome {user.username}</div>
    
}

export default Profile;