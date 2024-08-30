import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
interface Blogs {

    id: string,
    title: string,
    content: string,
    author: {
        name: string
    },

}

export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("tokenmediumfrntend")
            }
        }).then(response => {

            setBlogs(response.data.Posts);
            setLoading(false);
        })
    }, []);

    return { loading, blogs }
}

export interface Blog {

    id: string,
    title: string,
    authorId: string,
    content: string,
    published: boolean,
    author:{
        id:string,
        email:string,
        name:string
    }
}
export function useBlog({ id }: { id: string }) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>({

        id: "",
        title: "",
        authorId: "",
        content: "",
        published: false,
        author:{
            id:"",
            email:"",
            name:""
        }
    });
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("tokenmediumfrntend")
            }
        }).then(response => {

            setBlog(response.data.Post);
            setLoading(false);
        })

    }, [id]);

    return {loading,blog}
}