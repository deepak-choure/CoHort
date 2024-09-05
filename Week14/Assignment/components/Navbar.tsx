import Link from "next/link";

export function Navbar(){
    return <div className="flex justify-evenly  shadow-md shadow-slate-900  py-4 bg-slate-950 mb-4  ">
        <Link href={"/"} >
        <button className=" border-gray-900   bg-slate-800 rounded-md px-4 py-2 hover:scale-110 hover:bg-slate-600 font-bold">Home</button>

        </Link>
        <Link href={"/static-page"} >
        <button className=" border-gray-900   bg-slate-800 rounded-md px-4 py-2 hover:scale-110 hover:bg-slate-600 font-bold">Server Page</button>

        </Link>
        <Link href={"/interactive-page"} >
        <button className=" border-gray-900   bg-slate-800 rounded-md px-4 py-2 hover:scale-110 hover:bg-slate-600 font-bold">Client Page</button>

        </Link>
       
        
    </div>
}