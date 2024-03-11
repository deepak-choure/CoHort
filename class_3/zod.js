const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
//what if you need i/p like
//{
//   email: string => email
//   password : atleast 9 letter 
//   country : "IN" , "US"
//}

const schema1 = zod.object({
  email : zod.string(),
  password : zod.string(),
  countary : zod.literal("In").or(zod.literal("US")),
  kidneys : zod.array(zod.number())
})
                 
app.use(express.json());

app.post("/health-checkup",function(req,res){
  
  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys);
  // const kidneyLength = kidneys.length;
  //res.send("you have "+kidneyLength+" kidneys");
  if(!response.success){
    res.status(411).json({msg: "input is invalid"})
  }else {
    res.send({
      response
    })
  }
});