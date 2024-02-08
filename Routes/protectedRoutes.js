const express=require('express') 
const verifiedtoken=require('../Middleware/Authenticationmiddleware') 
const router =express.Router()
router.get('/',(req,res)=>{
    res.status(200).json({
        messege:"protected route accessed"
    })
})
module.exports= router
