const {router, Router} = require ("express");
const {adminModel} = require ("../db.js");
const jwt = require("jsonwebtoken");
const  JWT_ADMIN_PASSWORD  = "Admin@123";

const adminRouter = Router();

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
                 }, JWT_ADMIN_PASSWORD);
     
                 res.json({
                       token : token
                 })
           } else {
                 res.status(403).json({
                       message : "Incorrect Credentials!"
                 })
           }
})

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})


module.exports = {
      adminRouter : adminRouter,
}