///Continue to three adding middleware

//so brute - use prechecks in every route

// const express = require("express");
// const port = 3000;
// const app = express();

// app.get("/", (req, res) => {
//   let kidneyId = req.query.kidneyId;
//   let username = req.headers.username;
//   let password = req.headers.password;
//   if(username != "deepakchoure" ){
//     res.status(403).json({
//         msg:"User doesn't exist"

//     })
//     return;
//   }
//    if(password !="deep123"){
//     res.status(403).json({
//         Caution:"Wrong password"
//     })
//   }
//    if(kidneyId != 1 && kidneyId != 2){
//     res.status(411).json({
//         msg:"wrong input !! "
//     })
//     return;
//   }

//   //lets say every thing is fine
//   res.json({
//     welcome:"let me check the status"
//   })

// });
// app.listen(port, () => {
//   console.log(`Server is running`);
// });


//better = use a function on top and call it in every route
// const express = require("express");
// const port = 3000;
// const app = express();


// function checkusername(username) {
//   if (username != "deepakchoure") {
//     return false;
//   }
//   return true;
// }
// function checkPassword(password) {
//   if (password != "deep123") {
//     return false;
//   }
//   return true;
// }
// function validKidneyId(id){
//     if(id != 1 && id != 2){
//         return false;
//     }
//     return true;
// }

// app.get("/", (req, res) => {
    
//     let username = req.headers.username;
//     let password = req.headers.password;
//     let kidneyId = req.query.kidneyId;
//     if(checkusername(username)){ 
//         if(checkPassword(password)){
//             if(validKidneyId(kidneyId)){
//                 res.json({
//                     Welcome:"let me check the status"
//                 })
//             } else{
//                 res.status(411).json({
//                     msg:"Wrong input id"
//                 })
//             }
//         } else {
//             res.status(403).json({
//                 Caution:"Wrong password"
//             })
//         }
//     } else{
//         res.status(403).json({
//             msg:"user doesnt existt"
//         })
//     }
//   res.send("hii there");
// });
// app.listen(port, () => {
//   console.log(`server is running`);
// });



//best Solution = use Middleware

const expres = require('express');
const port = 3000;
const app = expres();
//now look at syntax
function userMiddleware(req,res,next){
    if(req.headers.username != "deepakchoure"){
        res.send("user doesn't exist");
    }
    next();
}

function passwordMiddleware(req,res,next){
    if(req.headers.password !="deep123"){
        res.send("wrong Password");

    }
    next();
}
function kidneyMiddlewere(req,res,next){
    if(req.query.kidneyId != 1 && req.query.kidneyId != 2){
        res.send("Wrong input id ");
    }
    next();
}

//see below at code
app.use(userMiddleware,passwordMiddleware,kidneyMiddlewere)
app.get("/",(req,res)=>{

    res.send(
        "everytng fine"
    )
}  )
app.listen(port,()=>{
    console.log(`Server is runniing`)
})

///Now in production there are multiple middleweare like 100 
//so its ugly to put every middleware name in route 
//use app.use(MiddlewareName)