const express = require("express")
const app = express()
// const connectDb = require("./database/databaseConnection") // can take different variablename 
const dbconnect = require("./database/databaseConnection")
const blogCreateModel = require("./model/blogModel")
const {multer,storage} = require("./middleware/multerConfig")
const blogModel = require("./model/blogModel")
const upload = multer({storage:storage}) // Initialize multer with the defined storage since storage and multer are interconnected

app.use(express.json()) // Middleware to handle JSON bodies
app.use(express.urlencoded({extended: true})) // Middleware to handle URL-encoded bodies

app.set("view engine","ejs")

console.log(typeof blogModel);

app.get("/blog", (req,res)=>{
    res.render("blog.ejs")
    
})


dbconnect()


// connectDb()

app.post("/blog",upload.single('image'), async (req,res)=>{

    const filename = req.file.filename // Extracting images from the database which was sent through the blog post while rendering "/blog"
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



app.get("/", async (req,res)=>{
    const blogs = await blogModel.find() // returns all data from database in array format 
    if(blogs.length === 0){
        res.send("No blogs")
    }
    
    res.render("homepage.ejs",{blogs})
})

app.get("/blogRender/:id",async(req,res)=>{
    const id = req.params.id
    const haha = await blogCreateModel.findById(id)
    console.log(haha);
    res.render("blogRender.ejs",{haha}) // passing haha variable in "blogRender.ejs"
})
// app.get("/update",(req,res)=>
// [
//     res.render("update.ejs")
// ])

app.get("/deleteblog/:id",async(req,res)=>{
    const id = req.params.id
    await blogModel.findByIdAndDelete(id)
    res.redirect("/") // Redirects to the root of the site after "deleting"
})

app.get("/editblog/:id",async(req,res)=>{
    const id = req.params.id
    await blogModel.findByIdAndUpdate(id)
    res.render("editBlog.ejs")
    
})




app.use(express.static("./storage")) // The line app.use(express.static("./storage")) configures the Express application to serve static files from the storage directory. This makes it easy to deliver static assets like images, CSS files, and HTML files to the client.

app.listen(5000, ()=>{
    console.log("Server running")
})