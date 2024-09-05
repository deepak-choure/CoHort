const express = require("express");
const router = require("./routes/surveyRouter.js")
const port = 3000;
const app = express();
app.use("/api/survey",router)
app.listen(port,()=>{
    console.log("Server is running")
})
