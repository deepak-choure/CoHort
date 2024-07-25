//Custom hook => function which return state and have use in front of name 
import axios from "axios";
import React, { memo, useEffect, useState } from "react";

//New code  custom hook
function useTodos(){
  const [todos,setTodos]= useState([]);//state
  useEffect(()=>{//hook
  axios.get("https://sum-server.100xdevs.com/todos")
  .then((response)=>{
    setTodos(response.data.todos);
  })
},[])
return todos; 
}
function App9(){


  //older way
//   const [todos,setTodos]= useState([]);//state
//   useEffect(()=>{//hook
//   axios.get("https://sum-server.100xdevs.com/todos")
//   .then((response)=>{
//     setTodos(response.data.todos);
//   })
// },[])

//using the custom hook
const todos = useTodos()
  return(
    <>
    {todos.map((todo)=>
      
      <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
    )}

    </>
  )
}
let Todo =memo(({title,description})=>{
  return(
    <>
    <div>Title: {title}</div>
    <div>Description: {description}</div>
    </>
  )
})
export default App9;