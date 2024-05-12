/**useEffect with dependecy  */
//**Write a component that thakes a todo id as an input and fetchtes the data for that todo from the given endpoint and then renders it  */
import axios from "axios";
import React, { useEffect, useState }  from "react";


function App5(){
  let [id,setId] = useState(1);
    return <div>
        <button onClick={()=>setId(1)}>One</button>
        <button onClick={()=>setId(2)}>Two</button>
        <button onClick={()=>setId(3)}>Three</button>
        <button onClick={()=>setId(4)}>Four</button>

        <Todo id={id}></Todo>

    </div>
}
function Todo({id}){
    const[todo,setTodo] = useState([]);
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((response)=>{
            setTodo(response.data.todo);
        })
    },[id])
    return <div>
          <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p> {todo.completed}</p>
    </div>

}


export default App5;