"use client"

import { submitAction } from "@/action/form";
import { useRef } from "react";
export default function Home() {
let ref = useRef<HTMLFormElement>(null);
  return (
  <div>
    <form ref={ref} action={(e)=>{submitAction(e);ref.current?.reset()}}>
      <div>
        <label className="" htmlFor="name">Name</label>
        <input className="bg-slate-400 rounded mx-2 mt-4" id="name" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="add">Address</label>
        <input className="bg-slate-400 rounded mx-2 mt-4" id="add" name="add" type="text" />
      </div>
      <button className="bg-blue-800 px-4 text-extrabold rounded mx-2 mt-4 py-2" >Submit</button>
      
    </form>
  </div>
  );
}
