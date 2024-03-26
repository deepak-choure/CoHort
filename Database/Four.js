const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/localfileCohort_four");
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("Users", userSchema)

app.get("/", (req, res) => {
    res.send(`hello world!`);
});


app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userExist = await User.findOne({ email: email })

    if (userExist) {
        return res.status(400).send("User already exists");
    }
    const user = new User({
        name: name,
        email: email,
        password: password
    });
    await user.save();

    res.json({
        "msg": "User created sucessfully"
    });

})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})