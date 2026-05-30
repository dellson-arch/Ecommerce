const ApiError = require("../utils/apiError")
const generateToken = require("../utils/token")
const userModel = require('../models/user.model')
const registerService = async(data)=>{
    const{name , email} = data

    if(!name , !email){
        throw new ApiError(200 , "all fields are required")
    }

    const newUser = await userModel.create({
        name , email
    })

    const token = await generateToken(newUser._id , newUser.email)

    return {
        token ,
        newUser
    }
}

module.exports = {
    registerService
}