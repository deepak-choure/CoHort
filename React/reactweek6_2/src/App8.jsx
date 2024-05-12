import React, { useEffect, useRef } from "react";

export default function App8(){
    const divRef = useRef()
    const tax = 20000;

    useEffect(()=>{
        setTimeout(()=>{
            //older way
           // document.getElementById("incomeTaxContainer").innerHTML = "5000";
            //hook way
            divRef.current.innerHTML = "5000"
        },5000)
    })

    return (
        <div>
            Hii there, your income tax returns are 
            <div
            id="incomeTaxContainer"
            ref={divRef}>{tax}</div>
        </div>
    )
}