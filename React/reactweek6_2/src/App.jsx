import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 4;
  const [todos, setTodos] = useState([
    { 
      id:1,
      title: "Wake up ",
      description: "early",
    },
    {
      id:2,
      title: "hit the gym",
      description: "burn the fire",
    },
    {
      id:3,
      title: "meet her",
      description: "not discuss problem",
    },
  ]);
  function Todo({ title, description }) {
    return (
      <>
        <h1>title: {title}</h1>
        <div> description: {description}</div>
      </>
    );
  }
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:"Study ",
      description:"3hrs onlyy"
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add a new Todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>;
      })}
    </>
  );
}

export default App;
