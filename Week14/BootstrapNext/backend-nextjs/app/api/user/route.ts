import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server"
import client from "@/db";
import { signupaction } from "@/app/actions/user";

export async function GET() {
    //database logic'
    const user = await client.nextUser.findFirst({});
   return NextResponse.json({
   name:user?.username,password:user?.password
   })
}
////this is how we write in express
// app.get("/api/user",(req,res)=>{
//     res.json({
//         email:"deepak@email.com",
//         name:"deepak"
//     })
// })

export async function POST(req: NextRequest) {
    // ///body
    // const body = await req.json();
    // //header
    // req.headers.get("Authorization")
    // //query params
    // req.nextUrl.searchParams.get("name")

    // await client.nextUser.create({
    //     data: {
    //         username: body.username,
    //         password: body.password
    //     }
    // })
    // return NextResponse.json({
    //     message: "You are logged in"
    // })
    
    const body = await req.json();
   const res = await  signupaction(body.username,body.password);
   if(res){
    return NextResponse.json({
        message:"You are signed up "
    })
   }
}
