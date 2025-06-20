const { Router } = require("express");
const {userModel} = require ("../db.js");
const userRouter = Router();


userRouter.post("/signup", function(req,res){
      res.json({
            message : "You Are Signed Up!"
      })
}) 
userRouter.post("/signin", function(req,res){
      res.json({
            message : "You Are Signed In!"
      })
})


module.exports = {
      userRouter : userRouter,
}