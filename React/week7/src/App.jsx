import { Suspense, lazy, useState } from 'react'

import React from 'react';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
// import { Dashboard } from './components/Dashboard'
const Dashboard  = React.lazy(()=> import("./components/Dashboard"));
import './App.css'
const  Landing  = React.lazy(()=> import("./components/Landing"));

function App() {
 

  return (
    <>
    
    
    <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path="/" element={<Suspense fallback={"Loading..."}><Landing></Landing></Suspense>}></Route>
      <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard></Dashboard></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </>    
    
    
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Home</button>

      <button onClick={()=>{
        navigate("dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
