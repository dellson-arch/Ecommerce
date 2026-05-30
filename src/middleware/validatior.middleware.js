const {body , validationResult} = require('express-validator')

const respondWithValidationResult = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }
    next()
}

const productValidation = [
  body("name")
    .notEmpty() 
    .withMessage("Product name is required")
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 characters"),

  body("description")
    .notEmpty()
    .withMessage("Description is required"),

  body("priceAmount")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("priceCurrency")
    .notEmpty()
    .withMessage("Currency is required")
    .isIn(["INR", "USD"])
    .withMessage("Currency must be INR or USD"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array"),

    respondWithValidationResult
];

const registerValidation = [
    body('name')
    .isString()
    .withMessage("name is required"),

    body('email')
    .isString()
    .withMessage("email is required"),
  
    respondWithValidationResult
]


module.exports = {
    productValidation , registerValidation
}