import React from 'react';
import { useState } from 'react'
import './App.css'

function App0() {
  // const [title, setTitle] = useState("deepak")
  // function Header({title}){

  //   return (
  //     <>
  //     <div>My name is {title}</div>
      
  //     </>
  //   )
  // }
  
  // return (
  //   <>
  //   <button onClick={()=>{setTitle(Math.random())}}>Click to change the title</button>
  //    <Header title={title}></Header>
  //    <Header title="deepika"></Header>
  //   </>
  // )


//**************PUSHING THE  STATE DOWN  ***********/
  // function Header({ title }) {
  //   return (
  //     <>
  //       <div>My name is {title}</div>
  //     </>
  //   );
  // }
  // function HeaderwithButton() {
  //   const [name, setName] = useState("deepak");
  //   return (
  //     <>
  //       <button
  //         onClick={() => {
  //           setName(Math.random());
  //         }}
  //       >
  //         Click to change the title
  //       </button>
  //       <div>My name is {name} </div>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //   <HeaderwithButton></HeaderwithButton>
  //   <Header title="deepika"></Header>
  //   </>
    
  // )
  //**********************OPTIMISED WAY ->USING MEMO() ************/
  const [name, setName] = useState("deepak");
 
  function updateTitle(){
    setName(Math.random());
  }
  return (
    <div>
    <button onClick={updateTitle}> Click to change the title</button>
    <Header title={name}></Header>//only these will get re-render
    <Header title={name}></Header>//only these will get re-render

    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    <Header title="deepika"></Header>
    </div>
  )
}
const Header = React.memo(function Header({title}){
  return(
    
    <div>My name is {title}</div>
    
  )
})

export default App0;
