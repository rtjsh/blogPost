const express = require("express")
const app = express()
const connectDb = require("./database/databaseConnection")
const blogCreateModel = require("./model/blogModel")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/blog", (req,res)=>{
    res.render("blog.ejs")
})

connectDb()

app.post("/blog", async (req,res)=>{
    const {title, subtitle, image} = req.body
    console.log("Blog Created")
    res.send("Post Hitted")
    const blog = await blogCreateModel.create({
        title,
        subtitle,
        image
    })
    res.send(blog)
})

app.listen(3000, ()=>{
    console.log("Server running")
})