const express = require ("express");
const jwt = require ("jsonwebtoken");
const mongoose = require("mongoose");
const {createUserRoutes} = require ("./user");
const {createCoursesRoutes} = require ("./course");

const app =  express();


createUserRoutes(app);
createCoursesRoutes(app);




app.listern(3000);
