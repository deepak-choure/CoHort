//Now IMplementing express server with db
const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
app.use(express.json());

//"mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/USERDATA"
mongoose.connect(
  "mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/ExpressDATA"
);
let userSchema = new mongoose.Schema({
  username: {type:String,unique:true},
  password: String,
  email: String,
});
let User = mongoose.model("EpressUser", userSchema);

app.post("/signin", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  try {
   
    let currUser = await User.create({ username, password, email });
    res.json({
      Congrats: "You have signed in successfully!!",
    });
  } catch (err) {
    if (err.code === 11000) {
      res.send(`user with this credential already exist,LOGIN Instead `);
    } else {
      res.status(403).json({
        Error: err,
      });
    }
  }
});
app.get("/users", async (req, res) => {
  let username = req.headers.username;
  let password = req.headers.password;
  try {
    let userExist = await User.findOne({
      username: username,
      password: password,
    });
    if (userExist) {
      let allusers = await User.find({});
      res.json({
        AllUsers: allusers,
      });
    } else {
      res.json({
        error: "Error loging in ",
      });
    }
  } catch (err) {
    res.json({
      Error: `Error fetching users `,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
