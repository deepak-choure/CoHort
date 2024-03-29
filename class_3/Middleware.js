/**replicating an amusement park to understanding the middlewere concept
 * request-response cycle
 * next()
 * 
 * 
 */

const express = require("express");
const port = 3000;
const app = express();
const isOldEnough = require("./functions.js");
function isOldEnoughMiddleware(req,res,next){
    if(isOldEnough(req.query.age)){
        next();
    } else {
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
}

app.get("/",(req,res)=>{
    res.send("Hello World!")
})
//when certain middleware is used in every route then we can define it it app.use()

app.use(isOldEnoughMiddleware);
app.get("/ride1",(req,res)=>{
    // //the check is inside route handler
    // if(isOldEnough(req.query.age)){
    //    res.json({
    //     msg:"YOU are welcome to the ride1. Enjoy ;)"
    // }) 
    // } else {
    //     res.status(411).json({
    //         msg:"Sorry you are not of age yet"
    //     })
    // }

    res.json({
        msg:"YOU are welcome to the ride1.Enjoy ;)"
    })
    
})
app.get("/ride2",(req,res)=>{
    // if(isOldEnough(req.query.age)){
    //    res.json({
    //     msg:"YOU are welcome to the ride2. Enjoy ;)"
    // }) 
    // } else {
    //     res.status(411).json({
    //         msg:"Sorry you are not of age yet"
    //     })
    // }

    res.json({
        msg:"Yoy you are welcome to the ride2, Enjoy ;)"
    })
    
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})