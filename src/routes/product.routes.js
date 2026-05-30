let express = require('express')
const productController = require('../controllers/product.controller')
const authMiddleware = require('../middleware/auth.middleware')
const {productValidation} = require('../middleware/validatior.middleware')
const upload = require('../upload/multer')


let router = express.Router()

// console.log(authMiddleware);
// console.log(upload);
// console.log(createProducts);
/**
 * @routes POST /api/product/create
 * @description product will get created
 * @access public
 */
router.post('/create' , authMiddleware , upload.array('images',5), productValidation , productController.createProducts )

/**
 * @routes GET /api/product
 * @description all products will come
 * @access public
 */

router.get('/' , authMiddleware  , productController.getAllProducts )

console.log(productController);

/**
 * @routes GET /api/product/:userId
 * @description products of that userId will come
 * @access public
 */
router.get(
  "/:userId",
  authMiddleware,
  productController.getProductsByUserId
);

/**
 * @routes PATCH /api/product/:productId
 * @description update any single product
 * @access public
 */
router.patch(
  "/:productId",
  authMiddleware,
  productController.updateProduct
);

/**
 * @routes PUT /api/product/:productId
 * @description all products will come
 * @access public
 */
router.put(
  "/:productId",
  authMiddleware,
  productController.replaceProduct
);

/**
 * @routes DELETE /api/product/:productId
 * @description delete that particular product
 * @access public
 */
router.delete(
  "/:productId",
  authMiddleware,
  productController.deleteProduct
);


module.exports = router