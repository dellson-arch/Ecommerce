const mongoose = require('mongoose')

async function connectToDb(){
   try {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to db")
    })
   } catch (error) {
     console.error("Error connecting to MongoDB", err);
   }
}

module.exports = connectToDb