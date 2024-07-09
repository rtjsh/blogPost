const express = require("express")
const app = express()
const connectDb = require("./database/databaseConnection")
const blogCreateModel = require("./model/blogModel")
const {multer,storage} = require("./middleware/multerConfig")
const blogModel = require("./model/blogModel")
const upload = multer({storage:storage}) // Initialize multer with the defined storage


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine","ejs")
app.get("/blog", (req,res)=>{
    res.render("blog.ejs")
})

connectDb()

app.post("/blog",upload.single('image'), async (req,res)=>{

    const filename = req.file.filename
    const {title, subtitle, image} = req.body
    console.log(title,subtitle,image);
    console.log("Blog Created")
    try{
        await blogCreateModel.create({
        title:title,
        subtitle,
        image: filename
    })
    res.send("Post hitted")
}
    catch (error) {

        console.log("Error detected");
     }
    
})

app.listen(5000, ()=>{
    console.log("Server running")
})

app.get("/", async (req,res)=>{
    const blogs = await blogModel.find() // always returns array
    if(blogs.length === 0){
        res.send("No blogs")
    }
    res.render("homepage.ejs",{blogs})
})



app.use(express.static("./storage")) // The line app.use(express.static("./storage")) configures the Express application to serve static files from the storage directory. This makes it easy to deliver static assets like images, CSS files, and HTML files to the client.