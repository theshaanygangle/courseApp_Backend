const express = require ("express");
const jwt = require ("jsonwebtoken");
const mongoose = require("mongoose");
const {userRouter} = require ("./routes/user");
const {courseRouter} = require ("./routes/course");

//MongoDB Connection 
const { connectDB } = require('./db'); // Import DB connection
const { adminRouter } = require("./routes/admin");
require('dotenv').config();

const app =  express();
const PORT = process.env.PORT || 3000;  // .env will do it's processes at PORT : 3000

connectDB(); // Call DB connection

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
