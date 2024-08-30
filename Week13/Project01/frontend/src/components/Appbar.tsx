import { Link } from "react-router-dom"


export function Appbar() {
    return (

        <div className="  border-b flex justify-between px-4 py-4 shadow-md">
            <Link to="/">
                <div className=" font-bold text-2xl cursor-pointer">NoteBook</div>
            </Link>

            <div className="flex gap-2 justify-center ">
                <Link to="/createNew">
                <button type="button" className="mt-1 px-3 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new</button>
                </Link>
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
            </div>

        </div>
    )
}