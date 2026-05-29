const productModel = require('../models/product.model')
const { getAllProductsService, createProductService } = require('../services/product.service')
const asyncHandler = require('../utils/asyncHandler')
const ApiResponse = require('../utils/apiResponse')


const createProducts = asyncHandler(asyncHandler(async(req,res)=>{
     const result = await createProductService(req.body)

     return res.status(200).json(
        new ApiResponse("product created sucessfully" , result)
     )
}))

const getAllProducts = asyncHandler(async(req,res)=>{
     const result = await getAllProductsService(req.body)

     return res.status(200).json(
        new ApiResponse("products updated sucessfully" , result)
     )
})


module.exports = {
    getAllProducts,
    createProducts
}