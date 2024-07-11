const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    email:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const registerModel = mongoose.model("register", registerSchema)
module.exports = registerModel;
