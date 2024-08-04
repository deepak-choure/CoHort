import React, { useState } from "react"
import axios from "axios"
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
function Signup() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    return (

        <>
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                        <Heading label={"Sign up"}></Heading>
                        <SubHeading label={"Enter your information to create an account "}
                          
                        ></SubHeading>
                        <InputBox label={"First Name"} placeholder={"John"} onChange={e=>{
                            setFirstName(e.target.value)
                        }}></InputBox>
                        <InputBox label={"Last Name"} placeholder={"Doe"} onChange={e=>{
                            setLastName(e.target.value)
                        }}></InputBox>
                        <InputBox label={"Email"} placeholder={"example@gmail.com"} onChange={e =>{
                            setUsername(e.target.value)
                        }}></InputBox>
                        <InputBox label={"Password"} placeholder={"123456"} onChange={e => {
                            setPassword(e.target.value)
                        }}></InputBox>
                        <Button onclick={()=>{
                            axios.post("http://localhost:3000/api/v1/user/signup",{
                                username,
                                firstName,
                                lastName,
                                password
                            }).then(response =>  localStorage.setItem("token",response.data.token))
                           navigate("/dashboard")

                        }} label={"Sign up"}></Button>
                        <BottomWarning label={"Already have an account? "} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;