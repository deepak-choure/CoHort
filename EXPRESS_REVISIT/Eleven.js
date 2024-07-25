//Now IMplementing express server with db and jwt
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "deepak@123";
const port = 3000;
const app = express();
app.use(express.json());

//"mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/USERDATA"
mongoose.connect(
  "mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/ExpressDATA"
);
let userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  token: String,
});
let User = mongoose.model("EpressUser", userSchema);

app.post("/signin", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  try {
    let token = jwt.sign({ username, password }, jwtPassword);
    let currUser = await User.create({ username, password, email, token });
    res.json({
      Congrats: "You have signed in successfully!!",
      token: token,
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
  let token = req.headers.authorization;

  try {
    let verified = jwt.verify(token, jwtPassword);
    let userExist = await User.findOne({
      token: token,
    });
    if (userExist) {
      let allusers = await User.find({});
      res.json({
        msg: `logged in as ${verified.username}`,
        AllUsers: allusers.map((user) => {
          let username = user.username;
          let email = user.email;
          return { username, email };
        }),
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
