//Topic JWT it is way of authentication and authorisation
//3 thing jwtpassword , jwt.sign ,jwt.verify
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "Password";
const port = 3000;
const app = express();
app.use(express.json());
//inmemory db
const All_USER = [
  {
    username: "harkirat@gmail.com",
    password: "kirat",
    name: "harkirat Singh",
  },
  {
    username: "raman@gmail.com",
    password: "raman",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "priya",
    name: "Priya kumari",
  },
];
function userExist(username, password) {
  let flag = false;
  All_USER.forEach((userdata) => {
    if (userdata.username == username && userdata.password == password) {
      flag = true;
    }
  });
  return flag;
}
//assuming the user has already signed up before
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExist(username, password)) {
    res.status(403).json({
      msg: "user doesn't Exist in our db",
    });
  }
  const token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    token,
  });
});
app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const varifiedData = jwt.verify(token, jwtPassword);
    const username = varifiedData?.username;
    res.json({
        users: All_USER.filter((userdata)=>{
         if(userdata.username == username){
            return false;
         }else{
            return true;
         }
         
        })
       });
  } catch (error) {
    return res.status(403).json({
      msg: error,
    });
  }
 
});
app.listen(port, () => {
  console.log(`server running`);
});
