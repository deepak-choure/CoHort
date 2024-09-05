import Link from "next/link";

export default function(){
    return(
        <div className="flex flex-col items-center justify-center px-10 h-screen w-full text-center ">
    <p className=" font-extrabold text-xl " >Welcome to Static Page</p>
    <p>This paragraph right here is rendered statically using Next.js. By generating the content on the server at build time, Next.js ensures that search engines can easily crawl and index this page, boosting its SEO. Plus, serving static content leads to faster load times and a smoother user experience. And if I need interactivity, Next.js allows me to use the "use client" directive for specific components.</p>
    <p>Pretty cool, right? Now navigate to the `Client Page` to check how interactivity is added in Next.js!</p>

    </div>
   
 
    )
}