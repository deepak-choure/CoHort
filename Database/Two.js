//mongoose + express
const mongoose = require("mongoose");
const express = require("express");
const port = 3000;
const app = express();
mongoose.connect("mongodb://localhost:27017/localfileCohort_two")
const userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String
})
const User = mongoose.model("Users", userSchema);



app.get("/",async(req,res)=>{
  const user = new User({ 
    name: "deepak choure",
    email: "ztejd@example.com",
    password: "deepak" 
  });
  await user.save();
  res.send(`hello world`);
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})





