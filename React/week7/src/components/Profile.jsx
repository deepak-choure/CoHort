
import React ,{useContext} from "react";
import {UserContext} from "./context";
function Profile(){
     const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return(
        <>

        <div>{user.username}</div>
        <div>{user.password}</div>
        </>
    )    
}

export default Profile;