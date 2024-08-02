const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/PayTM");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
       minLength:6
    },
    firstName:{
        type:String,
        required:true,        
        trim:true,
        maxLength:30
    },
    lastName:{
        type:String,
        required:true,        
        trim:true,
        maxLength:30
    },
    
})

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
const  Account = mongoose.model("Account",accountSchema);
const User = mongoose.model("User",userSchema);

module.exports = {
    User,
    Account
}