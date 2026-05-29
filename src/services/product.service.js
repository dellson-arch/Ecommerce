const ApiError = require('../utils/apiError')

const getAllProductsService = (data)=>{
    const products = await productModel.find()

   if(!products){
    throw new ApiError(200 , "products not found")
   }

   return products
}

module.exports = {
    getAllProductsService
}