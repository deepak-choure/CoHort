import { useState } from "react";
// todo application
//todo
/**
 * {
 * todos:[{title:"todo1",description:"first todo",completed: false,}]
 * }
 */
function App2(){
    const [todos,setTodos] = useState([{
        title:"here title come",
        descrption:"describe the task ",
        completed:"status of completion"
    }]);

    
    function addTodo(){
        setTodos([...todos,{
            title:"New todo",
            descrption:"des of new todo"  
        }])
    }
    
    return (
        <div>
            {/* <Todo title={todos[0].title} description={todos[0].descrption} completed={todos[0].completed}></Todo> */}
            {/* <Todo title={todos[1].title} description={todos[1].descrption} completed={todos[1].completed}></Todo> */}
            <button onClick={addTodo}>add random todo</button>
            {todos.map(function(todo){ 
                return <Todo title = {todo.title} description = {todo.descrption} ></Todo>
            })}
        </div>
        
    )
}
function Todo(props){
    return <div>
    <h1>Title: {props.title}</h1>
    <h2>Description: {props.description} </h2>
    <div>completed: {props.completed}</div>
   
</div>
    
}
export default App2