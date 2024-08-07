const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const { authMiddleware } = require("../Middlewares/middleware");
const { Account } = require("../db.js")
const router = express.Router();
router.use(express.json());
router.use(cors());
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.json({
        balance: account.balance
    })

});

router.post("/transfer", authMiddleware,async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {to,amount} = req.body;
  
    const account = await Account.findOne({userId:req.userId}).session(session);
    if(!account){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account session"
        });
    }
    if(account.balance <amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficent balance"
        });
    }

    const toAccount = await Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account"
        });
    }
    
    await Account.updateOne({userId:req.userId},{
        $inc:{balance: - amount}
    }).session(session);
    await Account.updateOne({userId:to},{
        $inc:{
            balance:amount
        }
    }).session(session);

    await session.commitTransaction();
    res.json({
        message:"Transfer successful"
    });
});
module.exports = router;