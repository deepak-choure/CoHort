//************Prop drilling example and contex API */

import React, { useContext, useState } from "react";
import { CountContext } from "./components/context";
import { UserContext } from "./components/context";
import Login from "./components/Login";
import Profile from "./components/Profile"
export default function App2(){
    const [count,setCount] = useState(0);
    const [user,setUser] = useState({})
    
//wrap everyone who wants to use the teleported value inside a provider
    return (
      <>
      
      <CountContext.Provider value={{count,setCount}}>
      <Count ></Count>
      </CountContext.Provider>
      <UserContext.Provider value={{user,setUser}}>
        <Login></Login>
        <Profile></Profile>
      </UserContext.Provider>

        
       

      </>
    );
}


function Count(){
    const {setCount} = useContext(UserContext)
    console.log("count rerender ")
    return (
        <>
       <CountRenderer ></CountRenderer>

        <Button setCount={setCount}></Button>

        </>
        
    )
}
function CountRenderer(){
    const {count} = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Button(){
    const {setCount} = useContext(CountContext);
    return <>
    <button onClick={()=>{
        setCount((count)=>count+1)
    }}>Increase</button>
    <button onClick={()=>{
        setCount((count)=>count-1)
    }}>Decrease</button>
    
    </>
}