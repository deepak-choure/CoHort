import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  signinInput, signupInput } from '@deepak_choure/blogprojectcommon'
import { env } from 'hono/adapter'
import { sign } from 'hono/jwt'
const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()

userRouter.post("/signup", async (c) => {
  const { DATABASE_URL } = env(c);

  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL
  }).$extends(withAccelerate());


  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg:"Input validation failed"
    })
  }
  try {
    //Inser user to db
    const alreadyExist = await prisma.user.findUnique({
      where: {
        email: body.username
      }
    })



    if (alreadyExist) {
      c.status(403)
      return c.json({ Error: "User with this email already exist" })
    }

    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password
      },
    })

    const token = await sign({
      id: user.id
    },
      env(c).JWT_SECRET
    )
    return c.json({ jwt: token });
  } catch (error) {
    c.status(403);
    return c.json({ error: "Error while signing up" })

  }

})




userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg:"Input validation failed"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: env(c).DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.username
      }
    });
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" })
    }
    const token = await sign({ id: user.id }, env(c).JWT_SECRET)
    return c.json({ Jwt: token });
  }
  catch (error) {
    return c.status(403);
  }

})

export default userRouter;