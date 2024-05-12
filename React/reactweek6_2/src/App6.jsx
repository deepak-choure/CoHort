//**useMemo Hook******** /

import React , { useMemo, useState } from "react";
//**whenever the counter button is hitted the re-render takes place as state changer for counter which means the expensive logic of calculation of sum get run again and again for the same value of n here the useMemo hook comes to the rescue */
function App6(){
    // const [counter,setCounter] = useState(0);
    // const [input,setInput]= useState(1);
    // let count =0
    // for (let index = 1; index <=input; index++) {
    //     count= count+index;
        
    // }

    const [counter,setCounter] = useState(0);
    const [input,setInput] = useState(1)
     let count = useMemo(()=>{
        let finalCount = 0;
        for(let i =1;i<=input;i++){
            finalCount = finalCount +i;
        }
        return finalCount
     },[input])
    return(
        <>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <p>Sum from 1 to {input} is {count}</p>
            <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
        </>
    )
}
export default App6;
