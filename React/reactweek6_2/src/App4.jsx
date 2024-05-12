/************useEffect Hook (more)************ */

import React, { useEffect, useState } from "react";
import axios from "axios";
function App4(){
    const[todos,setTodos] = useState([]);

     useEffect(()=>{
        // fetch("https://sum-server.100xdevs.com/todos").then(async(response)=>{
        //    const data = await response.json();
        //    setTodos(data.todos);
        // })
        axios.get("https://sum-server.100xdevs.com/todos")
        .then((response)=>{
            setTodos(response.data.todos)
        })
     },[])

    
    return (
        <>
        {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
        
        </>
    )

    
}
function Todo({title,description,completed}){

    return (
    <>
    <h3>{title}</h3>
    <p>{description}</p>
    <p> {completed}</p>
    </>
    )
}

export default App4;