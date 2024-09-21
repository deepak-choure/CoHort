import express from "express"
import { VALUE } from "@repo/common/config";
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message:VALUE
    })
})
app.listen(8888,()=>{
    console.log("Server running on port 8888");
})