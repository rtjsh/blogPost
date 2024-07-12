const jwt = require("jsonwebtoken")
const promisify = require("util").promisify
const LoggedIn = require("../model/registerModel")
const isAuthenticated = (req,res,next)=>{
    const token = req.cookies.token
    if(token|| token === null){
        return resizeBy.send("Please LogIn")
    }
    //else block
    jwt.verify(token,process,env.SECRET,async (err,result)=>{
        if(err)
            {
                res.send("Invalid token")
            }
            else{
                const data = await LoggedIn.findbyId(result.userId)
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

