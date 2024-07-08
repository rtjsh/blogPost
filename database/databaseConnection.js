const mongoose = require("mongoose")

async function dbConnect(){
    await mongoose.connect("mongodb+srv://rajesh:okthatsall@cluster0.pkqxtu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database Connected");
}

module.exports = dbConnect