const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const authMiddleware = async(req,res,next)=>{
   try {
     const token = req.cookies.token

     if(!token){
        res.status(404).json({
          message : "invalid token provided unauthorized user"
        })
     }
  
     const decoded = jwt.verify(token , process.env.JWT_SECRET)

     if(!decoded){
        return res.status(401).json({
            message : "unauthorized user"
        })
     }

     let user = await userModel.findById(decoded.userId)

     req.user = user 

     next()

   } catch (error) {
     console.log(error)
     return res.status(500).json({
        message : "error in middleware"
     })
   }
}

module.exports = authMiddleware