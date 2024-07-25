//topic zod 
//now considering big input like form data or credential then how we make schema 
//defining for each 
//lets seee

const express = require("express");
const port = 3000;
const app = express();
app.use(express.json())
const z = require("zod")
//schema
const mySchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(8)
})
function validate(req,res,next){
 if(mySchema.safeParse(req.body).success){
    next();
 }
 res.status(403).json({
   errors: mySchema.safeParse(req.body).error
 })
 
}

app.get("/",validate,(req,res)=>{
    res.send(`Hii ${req.body.name} your email is ${req.body.email} and password is ${req.body.password}`)
})
app.listen(port,(req,res)=>{
console.log(`server  is running`)
})