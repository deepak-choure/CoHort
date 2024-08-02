const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db.js");
const {JWT_SECRET} = require("../config.js");
const { authMiddleware } = require("../Middlewares/middleware.js");

const router = express.Router();
router.use(express.json())
const signupBody = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
})

const signinBody = z.object({
    username:z.string().email(),
    password:z.string().min(6).max(20)
})

const updateBody = z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional(),
})


router.post("/signup", async (req, res) => {

    const response = signupBody.safeParse(req.body);
    
    if (!response.success) {
        // console.log(response.error)
       return  res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const userexists = await User.findOne({ username: req.body.username })
    if (userexists) {
       return res.status(411).json({
            message: "Email already taken"
        })
    }


    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })

    const token = jwt.sign({ userId }, JWT_SECRET);
    res.status(200).json({
        message: "User created successfully",
        token: token
    })



})

router.post("/signin", async (req, res) => {
   
    const response = signinBody.safeParse(req.body);
    if(!response.success){
      return  res.status(411).json({
            message:"Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    });
    if(!user){
       return res.status(411).json({

            message:"Error while logging in"
        })
    }
    const token = jwt.sign({userId:user._id},JWT_SECRET);
    res.status(200).json({
        token:token
    })
    

})

router.put("/",authMiddleware,async (req,res)=>{
    
    const response = updateBody.safeParse(req.body);
    
    if(!response.success){
        res.status(411).json({
            message:"Error while updating information"
        })
    }
   await User.updateOne({_id:req.userId},req.body);
   res.status(200).json({
    message:"Update successfully"
   })
})


router.get("/bulk",authMiddleware ,async(req,res)=>{
   const keyword = req.query.filter || "";
  const users = await  User.find({
        $or:[{
            firstName:{
                "$regex":keyword
            }
        },{
            lastName:{
                "$regex":keyword
            }
        }]
    });
    res.json({
        user:users.map(user =>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})


module.exports = router