const productModel = require("../models/product.model");
const {
  getAllProductsService,
  createProductService,
  getProductsByUserIdService,
  updateProductService,
  replaceProductService,
  deleteProductService,
} = require("../services/product.service");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const sendFiles = require("../upload/imagekit");

const createProducts = asyncHandler(async (req, res) => {
  const files = req.files;

  const uploadImages = await Promise.all(
    files.map(async (elem) => {
      return await sendFiles(elem.buffer, elem.originalname);
    }),
  );

  const onlyURLs = uploadImages.map((elem) => elem.url);

  const result = await createProductService(
    {
      ...req.body,
      images: onlyURLs,
    },
    req.user,
  );

  return res
    .status(200)
    .json(new ApiResponse("product created sucessfully", result));
});

const getAllProducts = asyncHandler(async (req, res) => {
  console.log("req.user =", req.user);
  const result = await getAllProductsService(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse("products fetched sucessfully", result));
});

const getProductsByUserId = asyncHandler(async (req, res) => {
  const result = await getProductsByUserIdService(req.params.userId);
  console.log("Param:", req.params.userId);
  return res
    .status(200)
    .json(new ApiResponse("Products fetched successfully", result));
});

const updateProduct = asyncHandler(async (req, res) => {
  const result = await updateProductService(req.params.productId, req.body);

  return res
    .status(200)
    .json(new ApiResponse("Product updated successfully", result));
});

const replaceProduct = asyncHandler(async (req, res) => {

  const result = await replaceProductService(
    req.params.productId,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      "Product replaced successfully",
      result
    )
  );
});

const deleteProduct = asyncHandler(async (req, res) => {

  const result = await deleteProductService(
    req.params.productId
  );

  return res.status(200).json(
    new ApiResponse(
      "Product deleted successfully",
      result
    )
  );
});

module.exports = {
  getAllProducts,
  createProducts,
  getProductsByUserId,
  updateProduct,
  replaceProduct,
  deleteProduct
};
