import axios from "axios"
import { BACKEND_URL } from "../config"
import {  SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";

export function CreateBlog() {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("")
    const navigate = useNavigate()
   async function handleClick() {
     const response =   await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem("tokenmediumfrntend")
            }
        })
        navigate(`/blogs/${response.data.postid}`)
    }
    function handletitleChange(e: { target: { value: SetStateAction<string>; }; }){
        setTitle(e.target.value)
    }
    function handleContentChange(e: { target: { value: SetStateAction<string>; }; } ) {
        setContent(e.target.value)
    }

    return (
        <div>
            <div className="w-full h-screen flex justify-center ">
                <div className="w-1/2 h-full ">
                    <input onChange={handletitleChange} type="text" id="default-input" className="bg-slate-200 border w-full border-gray-300 text-gray-600 text-sm font-bold rounded-lg outline-none focus:bg-slate-300  block  p-3.5 my-4" placeholder="title here..." required />
                    <div >
                        <div className="w-full h-full border border-gray-200 rounded-lg bg-slate-300 ">
                            <div className="px-4 py-2 h-full bg-gray rounded-t-lg ">
                                <label htmlFor="comment" className="sr-only"></label>
                                <textarea onChange={handleContentChange} id="comment" rows={20} className="w-full h-full px-0 text-sm text-gray-900  border-0 bg-slate-300 focus:bg-slate-200 outline-none placeholder:text-3xl  " placeholder="Write your blog here" required ></textarea>
                            </div>
                            <div className="flex items-center justify-end px-4 pb-3 ">
                                <button onClick={handleClick} type="submit" className=" items-center py-2.5 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg   hover:bg-blue-800">
                                    Post
                                </button>
<div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
function TextEditor() {

    return (
        <div></div>
    )
}