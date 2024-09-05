import { NextRequest, NextResponse } from "next/server";

// //redirect to home when user comes to the mathcher path
// export function middleware(request: NextRequest){


//     return NextResponse.redirect(new URL("/",request.url))
// }
// //it trigger the middleware to execute if mather match
// //matcher allows you to filter Middleware to run on specific paths.
// //can be done using conditionals
// export const config = {
//     matcher:"/about/:path*"
// }

// //hit the about path :you will redircted to /

export function middleware(request:NextRequest){
    if(request.nextUrl.pathname.startsWith("/about")){
        return NextResponse.rewrite(new URL("/about-2",request.url))
    }
}