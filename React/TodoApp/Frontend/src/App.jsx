import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

function App() {
   const [todos, setTodos] = useState([])
   //now how to hit the backend 
   //1.fetch method bad idea as every time setTodos called the component re-render and again the fetch request is hitted so we trap in sort of infinte loop
   fetch("http://localhost:3000/todos").then(async(res)=>{
    const json = await res.json();
    setTodos(json.todos)
   })

  return (
    <>
      <h1>To-Do Application</h1>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
