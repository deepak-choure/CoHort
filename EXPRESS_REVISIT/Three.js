//accessing the file
//fs module

const express = require("express");
const fs = require("fs");

const port =3000;
const app = express();
app.get("/:filename",(req,res)=>{
    let filename = req.params.filename;
   
    fs.readFile(filename,"utf-8",(err,data)=>{
        res.json({
           data
        })
    })
})
app.listen(port);
