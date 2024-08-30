
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@deepak_choure/blogprojectcommon";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
type variableType = SignupInput|SigninInput
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<variableType>(type==="signup"?{
        name: "",
        username: "",
        password: ""

    }:{
        username:"",
        password:""
    })
    
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,postInputs);
            
            const jwtToken:{Jwt:string} = await response.data;
            
            //response.data = {"Jwt":"eyhiu..."}
            localStorage.setItem("tokenmediumfrntend",`Bearer ${jwtToken.Jwt}`);
            navigate("/blogs")
        } catch (error) {
            alert("Error while singing up")
        }
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center w-full   "
        >
            
                <div className="px-6 border-0 bg-slate-100 border-gray-500 rounded-lg shadow-md flex flex-col">
                    <div className="text-3xl font-bold pt-2">
                       {type == "signin"?"Login to your account":"Create a new account"}
                    </div>
                    
                    <div className="p-4 flex flex-col gap-3">
                        {type === "signup" ? <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }}></LabelledInput>:null}
                        
                        <LabelledInput label="Username" type="email" placeholder="johndoe@example.com" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }}></LabelledInput>
                        <LabelledInput label="Password" type="password" placeholder="min 6 chars" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }}></LabelledInput>
                    </div>
                    <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-4  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">{type == "signup"?"Sign Up":"Sign In"}</button>
                    <div className=" px-4 flex gap-1 pb-2">
                        <div className=" text-gray-500 font-semibold">{type=="signin"?"Don't have an account?":"Already have an account?"}</div>
                        <div className="underline font-bold "><Link to={type=="signin"?"/signup":"/signin"}>{type =="signin"?"Signup":"Login"}</Link></div>
                    </div>

                </div>

            


        </div>
    )
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label htmlFor={label} className="block  text-sm font-semibold text-gray-900 ">{label}</label>
        <input onChange={onChange} type={type || "text"} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder={placeholder} required />
    </div>
}
export default Auth;