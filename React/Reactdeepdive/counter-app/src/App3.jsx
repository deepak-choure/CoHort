import React, { useState } from "react";

function App() {
    const [title,setTitle]= useState("deepak")
    function handleclick(){
        setTitle(Math.random().toString());
    }

  return (
    <>
      <button onClick={handleclick}>Click to update</button>
      <div>my name is {title}</div>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
      <Header title="Raman"/>
    </>
  );
}
     
//use of memo it stop all header from rerendering it the title not change (prop doesn't change)
const Header= React.memo(({title})=>{
    console.log("re rendered ")//see console
    return (
        <>
      <div>My name is {title}</div>
        
        </>
    )
})

export default App;
