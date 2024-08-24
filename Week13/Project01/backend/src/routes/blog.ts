import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { env } from "hono/adapter";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@deepak_choure/blogprojectcommon";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()


//middleware for next routes
//Write the logic that extracts the user id from the token user passed, and passes it over to the main route.
blogRouter.use('/*', async (c, next) => {
  try {
    const jwtToken = c.req.header("Authorization");
    if (!jwtToken) {
      c.status(403)
      return c.json({
        error: "Authorisation token is empty"
      })
    }
    const token = jwtToken.split(" ")[1];

    const jwtpayload = await verify(token, env(c).JWT_SECRET)
    if (!jwtpayload) {
      c.status(403)
      return c.json({
        error: "Unauthorized token passed"
      })
    }

    c.set("userId", String(jwtpayload.id));

    await next()
  } catch (error) {
    c.status(403)
    return c.json({
      error: "Login error,Make sure you logged in"
    })
  }


})

//route for creating the post when user signedin
blogRouter.post("/", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: env(c).DATABASE_URL
    }).$extends(withAccelerate());

    const authorId = c.get("userId");
    const reqBody = await c.req.json();
    const {success} = createBlogInput.safeParse(reqBody)
    if(!success){
      c.status(411);
      return c.json({
        msg:"Invalid input provided while creation"
      })
    }
    const post = await prisma.post.create({
      data: {
        title: reqBody.title,
        content: reqBody.content,
        authorId: authorId
      }
    });
    return c.json({ postid: post.id });
  } catch (error) {
    c.status(403);
    return c.json({
      msg: "Error posting blog"
    })
  }



})


//route for update the post given the user is signedin and matches with authorId
blogRouter.put("/", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: env(c).DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg:"Invalid input provided while updation"
      })
    }
    const postId = body.id;
    const userId = c.get("userId");
    await prisma.post.update({
      where: {
        id: postId,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content
      }
    })
    return c.json({
      msg: "Post updated"
    })
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Error updating the blog"
    })
  }



})


//route which get all the post to read 
blogRouter.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: env(c).DATABASE_URL
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany({})
    return c.json({
      Posts: posts
    })
  } catch (error) {
    return c.json({
      error: "Error getting posts"
    })
  }

})

//route to get the post by id 
blogRouter.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: env(c).DATABASE_URL
    }).$extends(withAccelerate());

    const post = await prisma.post.findFirst({
      where: {
        id: id
      }
    })
    if (!post) {
      return c.json({ msg: "Post not exist with this id" })
    }
    return c.json({ Post: post })
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Error getting the blog,make sure you passed right id"
    })

  }


})



export default blogRouter;
