
import { Blog } from "../hooks";

export function FullBlog({ blog }: { blog: Blog }) {
    return (
        <div>
            
            <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-12 bg-slate-200  justify-center">
                <div className=" md:col-start-3 md:col-end-8  px-2">
                    <div className="text-4xl font-bold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className=" md:col-start-9 md:col-end-11  px-2">
                    <div className="text-slate-500">Author</div>
                    <div className="flex ">
                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                         </div>
                        <div className="font-semibold text-xl px-2">{blog.author.name}</div>
                    </div>
                    <div className="pt-1 text-slate-600 leading-4 text-sm" >fancy things about user. May be picked up form their about section</div>


                </div>
               

            </div>
        </div>

    )
}