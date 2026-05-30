const ProductModel = require("../models/product.model");
const ApiError = require("../utils/apiError");

const createProductService = async (data, user) => {
  const { name, description, priceAmount, priceCurrency, category, images } =
    data;

  if (!name || !description || !category || !priceAmount || !priceCurrency) {
    throw new ApiError(400, "all fields are required");
  }

  const product = await ProductModel.create({
    name,
    description,
    category,
    price: {
      amount: Number(priceAmount),
      currency: priceCurrency,
    },
    images,
    userId: user._id,
    email: user.email,
  });

  return product;
};

const getAllProductsService = async (userId) => {
  console.log("Searching:", userId);
  const products = await ProductModel.find({
    userId,
  });

  if (products.length === 0) {
    throw new ApiError(404, "Products not found");
  }

  return products;
};

const getProductsByUserIdService = async (userId) => {
  console.log("Searching for:", userId);

  const allProducts = await ProductModel.find();
  console.log("All products:", allProducts);

  const products = await ProductModel.find({
    userId: userId,
  });

  console.log("Found:", products);

  return products;
};

const updateProductService = async (productId, data) => {
  const product = await ProductModel.findByIdAndUpdate(productId, data, {
    new: true,
  });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

const replaceProductService = async (productId, data) => {
  const product = await ProductModel.findByIdAndUpdate(productId, data, {
    new: true,
    overwrite: true,
  });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

const deleteProductService = async (productId) => {
  const product = await ProductModel.findByIdAndDelete(productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

module.exports = {
  getAllProductsService,
  createProductService,
  getProductsByUserIdService,
  updateProductService,
  replaceProductService,
  deleteProductService
};
