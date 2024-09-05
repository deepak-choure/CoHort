import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
  <div className="flex  h-screen w-full justify-center items-center ">
    <div>
    <p className=" font-extrabold text-xl " >Welcome to Home Page</p>
    <Link href={"/interactive-page"}>
    <p>Client Page: Interactive client-side rendering in action.</p>
    </Link>
    <p>Server Page: Optimized static content for <strong>SEO</strong></p>

    </div>
   
  </div>
 )
}
