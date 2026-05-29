const productModel = require('../models/product.model')
const { getAllProductsService } = require('../services/product.service')
const asyncHandler = require('../utils/asyncHandler')
const ApiResponse = require('../utils/apiResponse')

const getAllProducts = asyncHandler(async(req,res)=>{
     const result = await getAllProductsService(req.body)

     return res.status(200).json(
        new ApiResponse("products updated sucessfully" , result)
     )
})


module.exports = {
    getAllProducts
}