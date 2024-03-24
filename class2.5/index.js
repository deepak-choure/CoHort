//creating an http server using express;
const express = require("express");
const app = express();
const port = 3000;


//using function
function sum(n){
    let ans = 0;
    for(let i =1;i<=n;i++){
        ans +=i;
    }
    return ans;
}

app.get("/",function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hii There Your ans is "+ans);
})
app.listen(port,function(){
    console.log("project is running !");
})