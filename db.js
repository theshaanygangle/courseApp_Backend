require('dotenv').config();

// MongoDB String Connection Logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit on failure
  }
};

const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema ({
      "email" : {type : String , unique : true },
      "password" : String,
      "firstName" : String,
      "lastName" : String
})

const adminSchema = new Schema ({
      "email" : {type : String , unique : true },
      "password" : String,
      "firstName" : String,
      "lastName" : String
})

const coursesSchema = new Schema ({
      "title" : String,
      "desc" : String,
      "price" : Number, 
      "imgURL" : String,
      "creatorId" : ObjectId
      
})

const purchasesSchema = new Schema ({
      "courseSeld" : ObjectId,
      "userId" : ObjectId,
})


const userModel = mongoose.model("user" , userSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const coursesModel = mongoose.model("courses" , coursesSchema);
const purchasesModel = mongoose.model("purchases" , purchasesSchema);

module.exports = {
      userSchema, 
      adminSchema,
      coursesSchema,
      purchasesSchema,
      connectDB,
}