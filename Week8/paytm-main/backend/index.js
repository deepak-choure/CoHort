const express = require("express");
const cors = require("cors")
const rootRouter = require("./routes/index.js")
const app = express();
app.use("/api/v1",rootRouter)

app.use(cors());
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running on port");
})
