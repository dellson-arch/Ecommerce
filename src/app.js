const express = require('express')
const errorMiddleware = require('./middleware/error.middleware')
const productRoute = require('./routes/product.routes')
const authRoute = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/product' , productRoute)
app.use('/api/auth' , authRoute)
app.use(errorMiddleware)

module.exports = app