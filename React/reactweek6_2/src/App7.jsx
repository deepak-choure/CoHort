//**useCallback and memo  */
import React,{memo, useCallback, useState } from "react"

function App7(){
  const [count,setCount] = useState(0);
  const log = useCallback(()=>{
    console.log("Child clicked");
  },[])
  return (
    <>
    <Child functiontoberun ={log}></Child>
    <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </>
  )

//as parent get rerender every time the function reference is changing every time so it lead to prop change in memo defined child component so child also get rerender unnecesserily
  // function log(){
  //   console.log("Child clicked");
  // }


  
  
  
}
//putting it outside prevent the re-rendering of child as refernce is same every time
// function log(){
//   console.log("Child clicked");
// }




//child component having a prop  
//memo - it is define as when the prop is unchange re-rendering nhi hogi
//but every time prop get update due to re-rendering of parent component and the log function is defined inside the parent
// so the child component also get rerender 
const Child = memo(({functiontoberun})=>{
  console.log("child render")

  return <div>
    <button onClick={functiontoberun}>button clicked</button>
  </div>
})

export default App7;
