//Now  real db
//mongodb
//mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net

//monogo is schemaless but schema is defined
const mongoose = require("mongoose");
//5 step process

//now connect to db

mongoose.connect(
  "mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/USERDATA"
);

///define schema (it is an class so instance need to be create)
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  name: String,
});

//we need to provide model of scheam it returns the class
const User = mongoose.model("user", userSchema);

//create instace of user class
const UserOne = new User({
  username: "deepak__choure",
  password: "deep123",
  name: "Deepak Choure",
});
//save it to db
UserOne.save()
  .then(() => {
    console.log(`User saved`);
  })
  .catch((err)=>{
    if(err.code === 11000){
      console.log(`You are trying to create duplicate user `)
    } else {
      console.log(err)
    }
  })  

//now CRUD operation
//all operation is async

async function create(username, password, name) {
  console.log(`User creation initiated...`);
  let userExist = await User.findOne({ username: username });
  if (userExist) {
    console.log(`User from this username already exists Try another`);
    return;
  }
  try {
    const newuser = await User.create({
      username,
      password,
      name,
      
      //save not require in create
    });
    console.log(`user created: ${newuser}`);
  } catch (error) {
    console.error("Error creating the document", error);
  }
}

 create("raman",'raman123',"Raman Singh")

async function find(username) {
  try {
    const userfound = await User.find({ username: username });
    console.log(`User with give info find was ${userfound}`);
  } catch (error) {
    console.error(`Error finding the user ${error}`);
  }
}
// find("deepak_choure");

async function update() {
  console.log(`updation initiated..`);
  try {
    const updated = await User.updateMany(
      { password: "deep123" },
      { password: "deep1234" }
    );
    console.log(`update users are ${updated}`);
  } catch (error) {
    console.error(`Error updating document ${error}`);
  }
}
update();
//delete
async function deleteuser(username) {
  try {
    let deletedUsers = await User.deleteMany({ username: username });
    console.log(`Deletion sucessful ${deletedUsers}`);
  } catch (error) {
    console.error(`Error updating document ${error}`);
  }
}
// deleteuser("deepak__choure");

//let"s delete duplicate
async function deleteDuplicate() {
  try {
    console.log(`Duplicate user deletion initiated...`);
    const allUser = await User.find({});
    for (let i = 0; i < allUser.length; i++) {
      let presentUser = allUser[i];
      for (let j = i+1; j < allUser.length; j++) {
        console.log(j)
        if (presentUser == allUser[j]) {
          await User.deleteOne(allUser[j]);
          console.log(`deletion on going`)
        }
      }
    }
    console.log(`duplicate user deleted successfully`);
  } catch (error) {
    console.error(`Error updating document ${error}`);
  }
}
 //deleteDuplicate()
