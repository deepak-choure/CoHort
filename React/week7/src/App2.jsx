//************Prop drilling example  */

import React, { useState } from "react";
export default function App2(){
    const [count,setCount] = useState(0);

    return (
      <>
        <Count count={count} setCount={setCount}></Count>
       

      </>
    );
}


function Count({count,setCount}){
    return (
        <>
        <div>
            {count}
        </div>
        <Button setCount={setCount}></Button>
        </>
        
    )
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