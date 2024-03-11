//
const express = require('express');
const app = express();
var users = [{
    name:"John",
    kidneys:[{
        healthy: false,

    },{
        healthy:true,
    }]
}];

app.get("/",function(req,res){
    const JohnKidneys = users[0].kidneys;
    const noOfKidneys = JohnKidneys.length;
    let healthyKidney =0;
    for(let i =0;i<noOfKidneys;i++){
        if(JohnKidneys[i].healthy){
            healthyKidney = healthyKidney+1;
        }
    }
    const unhealtyKidney = noOfKidneys - healthyKidney;
    res.json({
        noOfKidneys,
        healthyKidney,
        unhealtyKidney
    })
    console.log(JohnKidneys);
    
})
//middlewere
app.use(express.json());


app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    res.json({
        msg: "done!"
    })
})


app.put("/",function(req,res){
    for(let i =0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({

    })
})

//only if atleast one unhealthy kidney is there do this ,else return 411
app.delete("/",function(req,res){
    if(atleastOneUnhealthyKidney()){
        const newKidneys = [];
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "done",
    })
    } else {
        res.status(411).json({
            msg: "There is no bad Kidney"
        });
    }
    
})

function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i =0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true; 
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(3000,()=>{
    console.log("server starts ");
})