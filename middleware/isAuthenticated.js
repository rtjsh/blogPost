const jwt = require("jsonwebtoken")
// const promisify = require("util").promisify
const registerModel = require("../model/registerModel") // "../" => Used to refer the second folder of the directory "model"

const isAuthenticated = (req,res,next)=>{
    const token = req.cookies.token
    if(!token|| token === null){
        return res.send("Please LogIn")
    }
        //else block
    jwt.verify(token,process.env.SECRET,async (err,result)=>{
        if(err)
            {
                res.send("Invalid token")
            }
            else{
                const data = await registerModel.findById(result.userId)
                if(!data){
                    res.send("Invalid userId in the token")
                }
                else{
                    req.userId = result.userId
                    next()
                }
                    
                    
                }
            })
       
}

module.exports= isAuthenticated

