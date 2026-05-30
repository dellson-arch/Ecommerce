let express = require('express')
const registerController = require('../controllers/auth.controller')
const {registerValidation} = require('../middleware/validatior.middleware')

let router = express.Router()

/**
 * @routes POST /api/product/register
 * @description user will get registered
 * @access public
 */
router.post('/register' , registerValidation , registerController )

module.exports = router