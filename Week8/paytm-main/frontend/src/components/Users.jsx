import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function Users(){
    const [users, setUsers] = useState([]);
    const [filter,setFilter] = useState("")
    useEffect( ()=>{
        try {
            axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{

                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        .then(res =>{
           
            setUsers(res.data.user)
        })
        }catch(error){
            alert(error.message);
        }
        
    },[filter])

    return <>
        <div className="font-bold mt-6 text-lg ml-2">
            Send Money to...
        </div>
        <div className="my-2 rounded-full border-2 border-slate-500 overflow-hidden shadow-sm m-2">
            <input onChange={(e)=> setFilter(e.target.value)} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div
        >
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
}


function User({user}) {
const navigate = useNavigate();
    return <div         className=" flex justify-between p-2 shadow-md rounded-md m-3 shadow-slate-300 font-semibold border-2"
    >
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button  onclick={()=>{
                navigate(`/send?id=${user._id}&name=${user.firstName}`)
            }} label={"Send Money"} />
        </div>
    </div>
}