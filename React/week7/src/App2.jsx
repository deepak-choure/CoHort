//************Prop drilling example  */
/**
 *      App2
 *     /    \
 *    count 
 *   /
 * button
 * (button uses setcount which is defined at app and passed though the count )
 */
import React from "react";
import { useState } from "react";
function App2(){
    const [count,setCount]= useState(0);
    return(
        <>
    <Count count={count} setCount={setCount}></Count>
   
        </>
    )
}
function Count({count,setCount}){
    return (
        <>
        <div>Count : {count}</div>
        <Button count={count} setCount={setCount}></Button>
        </>
    )
}
function Button({count,setCount}){
    return(
        <>
        <button
        onClick={()=>setCount(count +1)}
        >
            Increment 
        </button>
        <button
        onClick={()=>setCount(count-1)}
        >
            Decrement
        </button>
        </>
    )
}
export default App2;