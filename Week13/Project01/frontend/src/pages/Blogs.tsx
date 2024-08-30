
import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>
            <BlogsSkeleton/>

            </div>
    }
    return (
    <>
        
        <div className="  flex flex-col items-center  ">
            <div className="max-w-3xl ">
            {
            blogs.map((blog)=><BlogCard
            id={blog.id}
            key={blog.id}
            authorName={blog.author.name ||"No name"}
            title={blog.title}
            content={blog.content}
            publishedDate={"Dec 3, 2023"}
        />)
        }
            </div>
       
            
            
        </div>
    </>
    )
}