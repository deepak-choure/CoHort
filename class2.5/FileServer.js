const fs = require("fs");
const express = require('express');
const app = express();
app.use(express.json());

//using fileSystem;
app.get("/files/:fileName", function(req, res){
    const name = req.params.fileName;
    
    fs.readFile(name,"utf-8",function(err, data){
       if(err){
        console.error("Error reading file:",err);
        return res.status(500).json({error:"error reading file"});
       }

       if(data){
        console.log(data);
        res.json({data});
       } else {
        console.error("No data read from file:",name);
        res.status(404).json({error:"file not found"})

       }
    })
   
});
app.listen(3000,function(){
    console.log("running");

})