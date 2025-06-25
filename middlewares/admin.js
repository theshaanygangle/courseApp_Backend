const jwt = require ("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware (req,res,next){
      const token = req.header.token;
      const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
      adminMiddleware : adminMiddleware,
}