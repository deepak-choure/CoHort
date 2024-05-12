/************useEffect Hook************ */
import React, { useEffect, useState } from "react";


function App3(){
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        const intervalId = setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos").then(async(res)=>{
                const json = await res.json();
               setTodos(json.todos) 
    
            })
        },5*1000); // Update every 1000 milliseconds (5 second)
            //cleanup function
        return () => clearInterval(intervalId);
       
    },[])
    function Todo({title,description,completed}){
        
        return (

        <>
        <h3>{title}</h3>
        <p>{description}</p>
        <p> {completed}</p>
        </>
        )
    }
    return <>
    
    {todos.map((todo)=>{
        return <CardWrapper key={todo.id}> <Todo key={todo.id} title={todo.title} description={todo.description} completed={todo.completed}></Todo></CardWrapper>
    })}
       
    </>
}
function CardWrapper({children}){
    return(
                 <div style={{border:"2px solid black",margin:"2px"}}>{children}</div>
            )
}
export default App3