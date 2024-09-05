const {PrismaClient} = require("@prisma/client")
const express = require("express");
const router = express.Router();
const prisma = new PrismaClient();
 router.use(express.json());
router.get("/", async (req, res) => {
    try {
        console.log("inside get request")
        const surveys = await prisma.survey.findMany({
            
            select:{
                title:true,
                questions:{
                    select:{
                        text:true,
                        option:{
                            select:{
                                title:true,
                                
                            }
                        }
                    }
                }
            }
        });
        res.status(200).json({
            surveys
        })
    } catch (error) {
        res.status(500).send(error.message);
    }

})
router.post("/",async (req,res)=>{
    console.log("inside post request")
    const body = await req.body;
    console.log(body)
    const title = body.title;
    const questions = body.questions;
 try{
    
   const survey = await  prisma.survey.create({
        data:{
            title:title,
            questions:{
                create:questions.map((que)=>({
                    text:que.text,
                    option:{
                        create:que.option.map((opt)=>({
                            title:opt.title
                        }))
                    }
                }))
            }
        },
        include:{
            questions:{
                include:{
                    option:true
                }
            }
        }
    })
    
    if(survey){
        res.status(201).json({survey})

    }
 } catch(error){
    console.error(error);
     res.send(error);
}
   
})
router.get("/:id",async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        const survey = await prisma.survey.findUnique({
            where:{
                id:Number(id)
            },
            select:{
                title:true,
                questions:{
                    select:{
                        text:true,
                        option:{
                            select:{
                                title:true,
                                
                            }
                        }
                    }
                }
            }
        })
        if(!survey){
            return res.status(404).json({
                message:"Survey not found"
            })
        }
        res.status(200).json(survey);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})


router.put("/:id",async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
   try {
    const survey = await prisma.survey.update({
        where:{
            id:Number(id)
        },
        data:{
            title:body.title,
            questions:{
                deleteMany:{},//delete existing questions and their options
                create:body.questions.map(que=>({
                    text:que.text,
                    option:{
                        create:que.option.map(o=>({
                            title:o.title
                        }))
                    }
                }))
            }
        },
         select:{
            title:true,
            questions:{
                select:{
                    text:true,
                    option:{
                        select:{
                            title:true,
                            
                        }
                    }
                }
            }
        }
    });
    if(!survey){
        return res.status(404).json({
            message:"Survey not found"
        })
    }
    res.status(200).json({
        message:"Survey updated successfully",
        survey
    });
   } catch (error) {
    res.status(500).json({message:error.message})
   }
})
router.delete("/:id",async(req,res)=>{
    const id = req.params.id
    try {

        const survey = await prisma.survey.delete({
            where:{
                id:Number(id)
            }
        })
        if(!survey){
            res.status(411).json({
                message:"unable to delete survey"
            })
        }
        res.status(200).json({
            message:'Survey deleted successfully',
            survey
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})
module.exports  = router;