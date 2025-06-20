const {Router} = require ("express");
const {courseModel} = require ("../db.js");

const courseRouter = Router();
      
courseRouter.get("/purchases", function (req,res){
      
})

courseRouter.get("/allCourses", function (req,res){

      
})


module.exports = {
      courseRouter : courseRouter,
}