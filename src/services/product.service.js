const ApiError = require("../utils/apiError");

const createProductService = async (data) => {
  const { name, description, priceAmount, priceCurrency, category } = data;
  const price = {
    amount: Number(priceAmount),
    currency: priceCurrency,
  };
  if (!name || !description || !category || !priceAmount || !priceCurrency) {
    throw new ApiError(200, "all fields are required");
  }

  const product = await productModel.create({
    name,
    description,
    category,
    price: {
      amount: Number(priceAmount),
      currency: priceCurrency,
    },
  });

  return product
}


const getAllProductsService = async (data) => {
  const products = await productModel.find();

  if (!products) {
    throw new ApiError(200, "products not found");
  }

  return products;
};

module.exports = {
  getAllProductsService,
  createProductService
};
