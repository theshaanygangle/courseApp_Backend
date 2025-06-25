const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware (req,res,next){
      const token = req.header.token;
      const decoded = jwt.verify(token, JWT_USER_PASSWORD);

      if (decoded) {
            req.userId = decoded,Id;
            next();
      } else {
            res.satus(403).json({
                  message : "Admin, Are Not LoggedIN!"
            })
      }
}

module.exports = {
      userMiddleware : userMiddleware,
}