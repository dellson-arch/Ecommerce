const jwt = require('jsonwebtoken')

let generateToken = (userId)=>{
    return jwt.sign({userId} , process.env.JWT_SECRET , {
        expiresIn : '60m'
    })
}

module.exports = generateToken