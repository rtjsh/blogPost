const jwt = require("jsonwebtoken")
// const promisify = require("util").promisify
const registerModel = require("../model/registerModel") // "../" => Used to get the path of "model" directory

const isAuthenticated = (req,res,next)=>{
    const token = req.cookies.token
    if(!token|| token === null){
        return res.send("Please LogIn")
    }
        //else block
    jwt.verify(token,process.env.SECRET,async (err,result)=>{ // The jwt.verify method is used to verify the authenticity and validity of a JWT. This method takes three arguments:

        // token: The JWT that needs to be verified. This is typically passed in the Authorization header of the request.
        // process.env.SECRET: The secret key used to sign the JWT. This should be a secure and confidential key stored in environment variables.
        // A callback function that gets executed once the token is verified.
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

