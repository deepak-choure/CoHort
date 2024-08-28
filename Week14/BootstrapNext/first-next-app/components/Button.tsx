"use client"
export function Button({type}:{type:"signin"|"signup"}){
    function handler(){
        if(type==="signin"){
            console.log("Signing In")
        }
        if(type === "signup"){
            console.log("Signing Up")
        }
    }
    return(
        <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>

    )
}