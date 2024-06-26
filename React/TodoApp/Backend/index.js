const express = require("express");
const cors = require("cors")
const { createTodo,updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
//backend doesn't allow silent request from fronend directly. It will throw an CORS error
//cors allow everyone to hit the backend but you can specify particular server to hit you 
//{
//    origin:"http://localhost:5173"
// }
//put it inside the cors()
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    //putting it in database
    await todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Item added to To-Do"
    })
})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({});
    
    res.json({
        todos
    })
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{completed:true})

    res.json({
        msg:"Todo marked as completed"
    })

})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);

})
