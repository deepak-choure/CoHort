//Topic : ZOD (an input validation library);

const express = require("express");
const z = require("zod");
const port = 3000;
const app = express();
app.use(express.json())
//before validating the input tell the zod how it should looks like
//means creating schema of input
//creating schema of string;
const userSchema = z.string();

//eg:
//parsing mean checking the i/p based on schema
console.log(userSchema.parse("This is string")); //this is string
// console.log(userSchema.parse(123)); //throw error


//due to thrown error whole server get crashed so we don't want it to happen
//Therefore we use safeparse for parsing
console.log(userSchema.safeParse("this is string2")); // {success: true, data: 'this is string2' }
console.log(userSchema.safeParse(123)); //{success:false,error : [Getter]}


//inside the route
const schema = z.string();
app.get("/",(req,res)=>{
    const username = req.body.username;
    const user = schema.safeParse(username);
    if(user.success){
        res.send(`Length is ${user.data.length}`);
    }
    res.status(403).json({
       Error: user?.error?.issues[0].code
    })
   
})



app.use((err, req, res, next) => {
  res.json({
    msg: "somenthing wrong",
  });
});
app.listen(port, (req, res) => {
  console.log("Server is running ");
});
