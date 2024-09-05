"use client"

import { useState } from "react"

export  default function(){
    const [count ,setCount] = useState(0)
    return (
       <div className="h-screen w-full flex flex-col justify-center items-center text-left  px-10">
        <div className="font-extrabold text-xl">Welcome to Interactive Page</div>
        <div>This route features a count button that demonstreates the power of client - side interactivity in Next.js, Click the vutton and see the count go up! This interactive feature is powered by the "use-client" directive in Next.js ,which allow this component to be rendered on the client-side.</div>
        <button className="font-bold text-md px-4 py-2 rounded-lg shadow-2xl shadow-white border-2" onClick={()=>setCount((count)=>count+1)}>Count is {count}</button>
       </div>
    )
}