const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title : {
        type: String
    },
    subtitle: {
        type: String
    },
    image: {
        type: String
    }
})

const blogModel = mongoose.model("Blog", blogSchema)
module.exports = blogModel