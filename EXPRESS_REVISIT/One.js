//1. Starts from here 
// npm i express
//node One.js


//import express as express
const express = require("express");
//define port
const port =3000;
//create instance of express named app
//app will give 5 method(get,post,put,delete,listen)
//these method serves the logic or work stored in the server and provide its services
const app = express();


function calculateSum(num){
    let sum =0;
    for(let i =0;i<=num;i++){
        sum+=i;

    }
    return sum;
}
//get method (name is taken from client side (get something))
app.get("/",(req,res)=>{//2 arg (path on which method run ,callback with 2 params request and response )
   let num =  req.query.n;
    let sum = calculateSum(num)//some backend expensive logic
    res.send(`Hii there Your sum from 1 to ${num} is ${sum}`);
})

//listen method (compulsary method it is gate for the server started )
app.listen(port,()=>{//2 arg (port number ,callback which get executed when server starts listening)
    console.log(`server is running`);
})