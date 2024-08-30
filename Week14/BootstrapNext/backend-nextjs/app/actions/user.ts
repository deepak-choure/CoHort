"use server"
import client from "@/db"

export async function signupaction(username:string,password:string){
    try {
        await client.nextUser.create({
            data:{
                username,
                password
            }
        })
        return true
    } catch (error) {
        return false
    }
    
}