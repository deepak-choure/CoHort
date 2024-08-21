import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


//Insert your todo user 
async function insertUser(username: string, email: string, password: string) {
    await prisma.todoUsers.create({
        data: {
            username,
            email,
            password
        }
    })
}
//insertUser("user2","user2@example.com","abcdefg")

async function updateUser(userId: number, username: string, email: string, password: string) {
    await prisma.todoUsers.update({
        where: {
            id: userId
        },
        data: {
            username,
            email,
            password
        }
    })
}
// updateUser(1,"todoUser1","todoUser1@email.com","todoUser1_password");

async function addTodo(userId: number, title: string, des: string) {
    await prisma.todo.create({
        data: {
            userId,
            title,
            description: des,
        }
    })
}

// addTodo(2, "titleOfTodo", "descripttionOfTodo");
//joins
async function getTodosAndUserDetails(userId: number) {
    let res = await prisma.todoUsers.findMany({
        where: {
            id: userId
        },
        select: {
            username: true,
            email: true,
            todos: true,

        }
    })
    console.log(res)
}
getTodosAndUserDetails(1);