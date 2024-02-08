const jwt =require('jsonwebtoken')
function verifiedtoken(req,res,next){
    const token=req.header('Authorization')
    if(!token){
        res.status(401).json({error:"err"})
    }
    try {
        const decoded=jwt.verify(token,'new_secret_key')
        req.userId=decoded.userId
        next()
    } catch (error) {
        res.status(401).json({
            error:"invalid token"
        })
    }
}
module.exports= verifiedtoken