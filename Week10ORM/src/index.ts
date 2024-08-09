import { PrismaClient } from "@prisma/client";
//auto generated while migration
const client = new PrismaClient();


//Perform CRUD
async function insertUser(username:string,password:string,firstname:string,lastname:string){
   const response = await client.todoUser.create({
        data:{
            email:username,
            password,
            firstname,
            lastname
        },
        
    })
    console.log(response)
}
// insertUser("user2","user2_password","User2_firstname","User2_lastname")
// insertUser("user3","user3_password","User3_firstname","User3_lastname")
// insertUser("user4","user4_password","User4_firstname","User4_lastname")
// insertUser("user5","user5_password","User5_firstname","User5_lastname")

async function getUsers(){
    const res = await client.todoUser.findFirst({
        where:{
            firstname:"User_firstname"
        }
    })
    const response = await client.todoUser.findUnique({
        where: {
           id:1
        },
    })
     const resp = await client.todoUser.findMany({where:{
        lastname:"User_lastname"
     }})
console.log(res)
}
// getUsers()
//findUnique only accept indentifier in where which is unique Like id and email
//findmany not take any condition it return all but we can do where, select and orderby  here


async function updateUsers() {
    // const res = await client.todoUser.update({
    //     where:{
    //         email:"user1"
    //     },
    //     data:{
    //         firstname:"User1_firstname",
    //         lastname:"User1_lastname",
    //         password:"User1_password"
    //     }
    // })

    await client.todoUser.update({
        where:{
            email:"user2",
        },
        data:{
            email:"user2@email.com"
        }
    })
}
// updateUsers()
//explor upsert()


async function deleteUsers(){
    const deleteusers = await client.todoUser.delete({
        where:{
            email:"user5@email.com"
        }
    })
}