//1.install mongoose
const mongoose = require("mongoose");


//2. connect to database
mongoose.connect("mongodb://localhost:27017/localfileCohort_One")


//3.define the Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    age:Number,
    adult:Boolean
})


//4. create model of the schema 
const User = mongoose.model("myuser",userSchema);


//5. construct document form  class defined from model
const userOne = new User({
    username:"deepak_choure",
    password:"deepak@123",
    firstname:"Deepak",
    lastname:"Choure",
    age:21,
    adult:true
})


//6.save it in the db 
userOne.save().then(()=>{
    console.log("Data saved to database")
})


/********done ********** */

//create operation
async function createOperation(){
    try{
        const user = await User.create({
            username:"deepika",
            password:"nahipata"
        });
        //also it don't follow schema (schemalesss)
        console.log("user created:",user);
    } catch(error){
        console.error("Error creating the document",error);
    }
};
createOperation();ss


//find operation
async function findOperation(){
    const myuserOne = await User.find({ firstname: "Deepak" });
    console.log(myuserOne);
    console.log("done")
};
findOperation();

//update operation
async function updateOperation(){
    try {
        const updateUsername = await User.findOneAndUpdate({ age: 21 }, { age: 20 });
        console.log("Update operation successful:", updateUsername);
    } catch (error) {
        console.error("Error occurred during update:", error);
    }
};
updateOperation();//updateoperation perform before findoperation

//delete operation
async function deleteOperation(){
    try{

        const deleteduser = await User.deleteMany({age:21});
        console.log("Sucessfully deleted the document: ",deleteduser);

    } catch(error){

        console.error("error deleting document ",error);

    }
};
deleteOperation();

