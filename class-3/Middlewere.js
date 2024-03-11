const express = require('express');
const app = express();

function userMiddlewere(req,res,next){
   const username = req.headers.username;
  const password = req.headers.password;
  if(username != "harkirat" || password != "pass"){
    res.status(403).json({msg: "incorrect inputs"})
  }else {
    next();
  }
};
function kidneyMiddlewere(req,res,next){
  const kidneyId = req.query.kidneyId;
  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({msg: "Incorrect inputs"})
  }else {
    next();
  }
}
app.get("/health-checkup",userMiddlewere,kidneyMiddlewere, function(req,res){
  // const username = req.headers.username;
  // const password = req.headers.password;
  // const kidneyId = req.query.kidneyId
  // if(username != "harkirat" || password != "pass"){
  //   res.status(400).json({"msg" : "1something bad with your inputs"});
  //   return;
  // }
  // if(kidneyId != 1 && kidneyId != 2){
  //   res.status(400).json({"msg" : "2something bad with your inputs"});
  //   return;
  // } 


  res.json({
    msg: "Your kidney is fine"
  })
});

app.listen(3000);
///Now someone tell you to do introduce another route that does Kidney replacement Input needs to be the same 
//ugly way - create a new route and repeat if else checks
//here comes the middlewere

