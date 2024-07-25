///Topic : Global Catches (when server get broke it help to show message to client insteade of private things)
const express = require('express')

const port = 3000;
const app = express();
app.use(express.json())


app.get("/",(req,res)=>{
    const username = req.body.username;
    const length = username.length;
    res.send(`length is ${length}`);
})

//Global Catches (IMP Concept){just hit get with no body and see}
app.use((err,req,res,next)=>{
    res.json({
        ERROR:"something up with the backend of the server "
    })
})
app.listen(port,()=>{

    console.log("server is running")
})