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

const registerModel = mongoose.model("register", registerSchema)  // The line "const registerModel = mongoose.model("register", registerSchema);"" is used to create a Mongoose model named register using a schema defined by registerSchema.
module.exports = registerModel;
