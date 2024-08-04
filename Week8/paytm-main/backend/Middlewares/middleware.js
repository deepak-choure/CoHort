const jwt = require("jsonwebtoken")
const {JWT_SECRET}= require("../config.js");

 function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(403).json({
            msg: "Authorization failed"
        })
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            return res.status(403).json({
                msg: "Authorization failed"
            })
        }
        req.userId = decoded.userId
        next();
    } catch(error){
       res.status(403).json({
        message:"Invalid token provided"
       })
    }
   
}

module.exports= {
    authMiddleware
}