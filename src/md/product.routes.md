# Product Routes

Base path: `/api/product`

## Endpoints

- **POST** `/create`
  - Description: Create a new product.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`, `upload.array('images', 5)`, `productValidation`
  - Controller: `productController.createProducts`
  - Request: multipart/form-data — supports up to 5 files in field `images` plus product fields (title, description, price, etc.)
  - Response: created product or validation errors

- **GET** `/`
  - Description: Retrieve all products.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`
  - Controller: `productController.getAllProducts`

- **GET** `/:userId`
  - Description: Retrieve products for the given `userId`.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`
  - Controller: `productController.getProductsByUserId`
  - Params: `userId` (path)

- **PATCH** `/:productId`
  - Description: Partially update a product by `productId`.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`
  - Controller: `productController.updateProduct`
  - Params: `productId` (path)

- **PUT** `/:productId`
  - Description: Replace a product by `productId`.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`
  - Controller: `productController.replaceProduct`
  - Params: `productId` (path)

- **DELETE** `/:productId`
  - Description: Delete a product by `productId`.
  - Access: protected by `authMiddleware`
  - Middleware: `authMiddleware`
  - Controller: `productController.deleteProduct`
  - Params: `productId` (path)

## Notes
- File uploads are handled via the `multer` middleware (`upload.array('images', 5)`).
- See `product.controller.js` for response shapes and error details.
