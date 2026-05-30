const { registerService } = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse")

const registerController = asyncHandler(async(req,res)=>{
    let result = await registerService(req.body)
    // console.log(result)
    res.cookie('token' , result.token)

    return res.status(201).json(
        new ApiResponse("user" , "user registered successfully")
    )
})

module.exports = registerController