import { Link } from "react-router-dom"


interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export function BlogCard({ id, authorName, title, content, publishedDate }: BlogCardProps) {
    return (
        <Link to={`/blogs/${id}`}>
            <div className=" border-b p-4 max-w-full min-w-full cursor-pointer ">
                <div className="flex gap-1 ">
                    <div>
                        <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className=" my-1.5 text-xs font-medium">
                        {authorName}
                    </div>
                    <span className=" font-bold  text-gray-500">. </span>
                    <div className="my-1.5 text-xs font-normal text-gray-500">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-bold ">
                    {title}
                </div>
                <div className="text-gray-700 font-medium ">
                    {content}
                </div>
                <div className="text-xs text-gray-500">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>

            </div>
        </Link>
    )
}

