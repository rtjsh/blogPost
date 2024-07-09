const multer = require("multer")

const uniqueId = Math.floor(Math.random() * 10) + 1;



const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./storage')  // cb(error, success)
    },
    filename : (req,file,cb)=>{
        cb(null,uniqueId + "-" + file.originalname)
    }

})

module.exports = {multer,storage}


