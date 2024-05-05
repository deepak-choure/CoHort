import { useState } from "react"
/** todos will be an array
 * todos = [{
 * title:something,
 * description:something
 * },
 * {
 * 
 * }]
 *  
 *  
 */
export function Todos({todos}){
   
    return(
        <>
       {
        todos.map((todo)=>{
            return(
                <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ==true ? "Completed":"mark as completed"}</button>
                </div>
            )
        })
       }
        </>
    )
}