import { useState } from "react";
import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { Link, useNavigate } from "react-router-dom";

function Signin(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
 return (
    <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                      <Heading label={"Sign in"}></Heading>
                      <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                      <InputBox placeholder={"example@email.com"} label={"Email"} onChange={e=>{
                        setUsername(e.target.value)
                        
                      }}></InputBox>
                      <InputBox placeholder={"123456"} label={"Password"} onChange={e=>{
                        setPassword(e.target.value)
                      }}></InputBox>
                      <div
                      className="pt-4"
                      >
                        <Button label={"Sign in"} onclick={()=>{
                          const url = "http://localhost:3000/api/v1/user/signin";
                          const reqbody = {username,password}
                          axios.post(url,reqbody).then(response => localStorage.setItem("token",response.data.token))
                          navigate("/dashboard")
                        }}></Button>
                      </div>

                      <BottomWarning label={"Don't have an account?"} buttonText={"Signup"} to={"/signup"}></BottomWarning>
                    </div>
                </div>
            </div>
 )
}
export default Signin;