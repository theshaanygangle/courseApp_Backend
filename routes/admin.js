const {router, Router} = require ("express");
const adminRouter = Router();
const {adminModel} = require ("../db.js");
const jwt = require("jsonwebtoken");
const  { JWT_USER_PASSWORD } = require("../config");

adminRouter.post("/signup" ,async function (req,res){
      const {email , password , firstName, lastName} = req.body;

      await userModel.create({
            email : email ,
            password : password,
            firstName : firstName,
            lastName : lastName,
      })
      res.json({
            message : "Admin SignedUp Successfull!"
      })
})

adminRouter.post("/signin" ,async function (req,res){
     const {email , password} = req.body;
     
           const user = await userModel.findOne({
                 email : email,
                 password : password
           });
     
           if (user) {
                 const token = jwt.sign({
                       id : user._id
                 }, JWT_USER_PASSWORD);
     
                 res.json({
                       token : token
                 })
           } else {
                 res.status(403).json({
                       message : "Incorrect Credentials!"
                 })
           }
})

adminRouter.post("/courses" , function (req,res){
      res.json({
            message : "Admin Courses!"
      })
})

adminRouter.post("/courses/bulk" , function (req,res){
      res.json({
            message : "Admin Bulk Courses!"
      })
})


module.exports = {
      adminRouter : adminRouter,
}