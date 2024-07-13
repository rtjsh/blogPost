const multer = require("multer")

const storage = multer.diskStorage({  // multer.diskStorage is a function in the multer library, which is a middleware for handling multipart/form-data, primarily used for uploading files in Node.js. The diskStorage function lets you control the storage of the uploaded files.
    destination : (req,file,cb)=>{
        cb(null,'./storage')  // cb(error, success)
    },
    filename : (req,file,cb)=>{
        cb(null,Date.now() + "-" + file.originalname)
    }

})

module.exports = {multer,storage}


