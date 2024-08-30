import { PrismaClient } from "@prisma/client";

console.log("inside db.ts")
const prismaClientSingleton = ()=>{
    console.log("prisma client  instantiated");
    return new PrismaClient();
}
//it return the instance of prismaClient
declare global{
    var prisma :undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()
//every time app get reload it checks is prisma is globally available if available then return it or if not then reinstanciate it
export default prisma
if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma
//it check if we are into production then the every time we start new connection 
