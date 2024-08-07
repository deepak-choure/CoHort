import axios from "axios"
import { useState,useEffect } from "react"

export default function Balance(){
    const [value,setValue] = useState(0)
    useEffect(()=>{
         axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => (setValue(res.data.balance)))
    },[value])
    return <div className="flex">
    <div className="font-bold text-lg">
        Your balance
    </div>
    <div className="font-semibold ml-4 text-lg">
        Rs {value}
    </div>
</div>
}