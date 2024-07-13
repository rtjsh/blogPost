require("dotenv").config()
const express = require("express")
const app = express()
const connectDb = require("./database/databaseConnection") // can take different variablename 
const registerModel=require("./model/registerModel")
const bcrypt = require("bcrypt")
const {multer,storage} = require("./middleware/multerConfig")
const blogModel = require("./model/blogModel")
const upload = multer({storage:storage}) // Initialize multer with the defined storage since storage and multer are interconnected
const jwt = require("jsonwebtoken")

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const Authenticated = require("./middleware/isAuthenticated")



app.use(express.json()) // Middleware to handle JSON bodies
app.use(express.urlencoded({extended: true})) // Middleware to handle URL-encoded bodies

app.set("view engine","ejs")


app.get("/blog",Authenticated,(req,res)=>{
    console.log((req.userId));
    res.render("./Blog/blog")
    
})


connectDb()

app.post("/blog",upload.single('image'), async (req,res)=>{

    const filename = req.file.filename // Extracting images from the database which was sent through the blog post while rendering "/blog"
    const {title, subtitle, image} = req.body
    // console.log(title,subtitle,image);
    // console.log("Blog Created")
    try{
        await blogModel.create({
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




app.get("/", Authenticated, async (req,res)=>{
    const blogs = await blogModel.find() // returns all data from database in array format 
    if(blogs.length === 0){
        res.send("No blogs")
    }
    
    res.render("./Blog/homepage",{blogs})
})

// The "id" is taken from the database
app.get("/blogRender/:id",async(req,res)=>{
    const id = req.params.id
    const haha = await blogModel.findById(id)
    console.log(haha);
    res.render("./Blog/blogRender",{haha}) // passing haha variable in "blogRender.ejs"
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
    const blog = await blogModel.findById(id)
    res.render("./Blog/editBlog",{blog})  
})

// For loading images and editing
app.post('/editblog/:id',upload.single('image'),async(req,res)=>{
    const filename = req.file.filename
    const id = req.params.id

    const {title, subtitle, image} = req.body
    await blogModel.findByIdAndUpdate(id,{title,subtitle,image,image:filename})
    res.redirect("/")
})


// This renders "Register.ejs" template in web server with "/Register" given as a route
app.get("/Register", async(req,res)=>{
    res.render("./authentication/Register")
})

app.post("/Register", async (req,res)=>{

    
    const {email,username,password} = req.body
    // console.log(email,username,password);
    // console.log("Blog Created")
    try{
        await registerModel.create({
        email:email,
        username: username,
        password: bcrypt.hashSync(password,10) // Hashing the password

    })
    res.send("Post hitted")
}
    catch (error) {

        console.log("Error detected");
     }
    
})

app.get("/Login", async(req,res)=>{
    res.render("./authentication/Login")
    
})

app.post("/Login", async(req,res)=>{
    const{email,password}= req.body
    const user = await registerModel.find({email : email}) // Returns value in array format

    if(user.length === 0)
    {
        res.send("Invalid email")
    }
    else{
        const isMatched = bcrypt.compareSync(password,user[0].password) // encrypting the password "user[0].password"
        if(!isMatched)
        {
            res.send("Invalid password")
        }
        else{
           const token = jwt.sign({userId : user[0]._id},process.env.SECRET,{
                expiresIn : '20d'
            })
            res.cookie("token",token)
            res.send("Logged in successfully")
        }
    }
})




app.use(express.static("./storage")) // The line app.use(express.static("./storage")) configures the Express application to serve static files from the storage directory. This makes it easy to deliver static assets like images, CSS files, and HTML files to the client.

app.use(express.static("./public")) // This allows you to serve static files such as HTML, CSS, JavaScript, images, etc., from a specific directory.

app.listen(5000, ()=>{
    console.log("Server running")
})


