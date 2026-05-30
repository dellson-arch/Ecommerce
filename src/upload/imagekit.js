const ImageKit = require('imagekit')

let strorageInstance = new ImageKit({
  urlEndpoint: process.env.URLendpoint,
  privateKey: process.env.privateKey,
  publicKey: process.env.publicKey,
})

let sendFiles = async(file , fileName)=>{
    let options = {
        file,
        fileName
    }

    return await strorageInstance.upload(options)
}

module.exports = sendFiles


