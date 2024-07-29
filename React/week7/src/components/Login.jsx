import React, { useContext, useState } from "react";
import { UserContext } from "./context";

function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <>
     <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" />
            {"   "}
            <input type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password" />
            <button type="submit">Submit</button>
            </form>
            
        </>
    )
}
export default Login;