//************Prop drilling example and contex API */

import React, { useContext, useState } from "react";
import { CountContext } from "./components/context";
export default function App2(){
    const [count,setCount] = useState(0);
//wrap everyone who wants to use the teleported value inside a provider
    return (
      <>
      
      <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}></Count>
      </CountContext.Provider>
        
       

      </>
    );
}


function Count({setCount}){
    console.log("count rerender ")
    return (
        <>
       <CountRenderer ></CountRenderer>

        <Button setCount={setCount}></Button>

        </>
        
    )
}
function CountRenderer(){
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Button({setCount}){
    
    return <>
    <button onClick={()=>{
        setCount((count)=>count+1)
    }}>Increase</button>
    <button onClick={()=>{
        setCount((count)=>count-1)
    }}>Decrease</button>
    
    </>
}