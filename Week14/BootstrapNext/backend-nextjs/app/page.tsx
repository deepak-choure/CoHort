import axios from "axios";

//backend 
import { PrismaClient } from "@prisma/client";
//sigleton prisma
import client from "@/db";


// ////this is frontend fetching thing which react provides
// async function getUserData() {
//   //await new Promise((resolve)=>setTimeout((resolve),3000))
//   const response = await axios.get("http://localhost:3000/api/user")
//   //why you are hitting yourself by http 
//   return response.data;
// }



async function getUserData(){
  const user = await client.nextUser.findFirst({});
  return user

}








//next let u create an async component but react can't async component only works while using server component
//notice i never use any useState hook to store detail get from api like we do in react 
export default async function Home() {
  const userData = await getUserData()
  return (
    <div className="flex justify-center items-center">
     {userData?.username},

     {userData?.password}
    </div>
  );
}
