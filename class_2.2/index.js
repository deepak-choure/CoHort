const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000


//initialise an instance of an express 
// app.get('/',function(req ,res){
//     //here browser ask get req and this code was run which contain data of an page whose url is hitted
//     //specifically database call;

//    res.send('<b>hii there<b>');

// })

//middleware
app.use(bodyParser.json());
app.post("/conversation",(req,res)=>{
   console.log(req.body);
    res.send({
        msg:"2+2=4"
    });
})

//your Http server listening from port which is 3000 here 
app.listen(port,()=>{
    console.log("Example app listening on port ",port);
});
 

