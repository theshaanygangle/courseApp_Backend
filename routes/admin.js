const {router, Router} = require ("express");
const adminRouter = Router();
const {adminModel} = require ("../db.js");

adminRouter.post("/signup" , function (req,res){
      res.json({
            message : "Admin Signed Up!"
      })
})

adminRouter.post("/signin" , function (req,res){
      res.json({
            message : "Admin Signed In!"
      })
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