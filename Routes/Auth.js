const express =require('express')
const User = require('../Models/User')
const Admin =require('../Models/User')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer =require('nodemailer')
const bodyparser = require('body-parser')
const router = express.Router()
router.use(bodyparser.urlencoded({extended: true}));
// node mailer
const transporter =nodemailer.createTransport(
  {
  service :"gmail",
  auth: {
      user: "mathewsxo@gmail.com",
      pass:'mathews'
  }
  }
);

  // *****************************userregistration //creation************************************
router.post('/register', async  (req, res) =>{
  try {
const {username ,password} = req.body
const hashedPassword = await bcrypt.hash(password,10)
const user= new User({username,password:hashedPassword})
await user.save()
res.status(201).send('registration successful')
  } catch (error) {
    res.status(500).send('internal server error')
    console.log(error)
  }
})
  // *****************************adminregistration //creation************************************
  router.post('/adminregister', async  (req, res) =>{
    try {
  const {username ,password} = req.body
  const hashedPassword = await bcrypt.hash(password,10)
  const admin= new Admin({username,password:hashedPassword})
  await admin.save()
  res.status(201).send('registration successful')
    } catch (error) {
      res.status(500).send('internal server error')
      console.log(error)
    }
  })
// ********************user Authentication //login ***********************************************
router.post('/login', async (req,res)=>{
    try {
       const {username ,password} = req.body
       const user = await User.findOne({username})
       if(!user)
       {
        return res.status(401).send('invalid User')
       }
       const passwordMatch =await bcrypt.compare(password,user.password)
       if(!passwordMatch)
       {
        return res.status(401).send('invalid Password')
       }
      
      const token = jwt.sign({userId:user._id}, "secretKey",{expiresIn:"1h"});
       res.send(token)
    } catch (error) {
        console.group(error)
        res.status(500).send('Internal Server Error')
    }
})
//********************* */ forgot password*********************************
router.post('/forgotpassword', async (req,res)=>{
try {
  const {username} = req.body
  const user = await User.findOne({username})
  if(!user)
  {
    return res.status(401).send('User not Found')
  }
  
  
  const otp =Math.floor(100000 + Math.random() * 900000).toString();

  const mailOptions = {
      from:"mathewsxo@gmail",
      to: email ,
      subject:"your otp for veification",
      text :`your otp is : ${otp}`
  };
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error)
    {
        return res.status(500).send(error.toString());
    }
    res.status(200).send('otp sent successfully');
});
  
} catch (error) { 
  console.log(error)
}
})



// generate and sent otp
router.post('/sent-otp',async (req,res)=>
{
  
  const hashedPassword = await bcrypt.hash(password,10)
  const updatePassword =await User.findByIdAndUpdate(user._id,{password:hashedPassword}) 
  if(updatePassword)
  {
    return res.status(200).send('password changed')
  }

});
module.exports = router
