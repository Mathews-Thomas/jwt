// const nodemailer =require('nodemailer')
// const bodyparser = require('body-parser')
// const express = require('express')
// const transporter =nodemailer.createTransport(
//     {
//     service :"gmail",
//     auth: {
//         user: "mathewsxo@gmail.com",
//         pass:'mathews'
//     }
//     }
// );
 
// // generate and sent otp
// app.post('/sent-otp',(req,res)=>
// {
//     const email = req.body.email
//     const otp =Math.floor(100000 + Math.random() * 900000).toString();

//     const mailOptions = {
//         from:"mathewsxo@gmail",
//         to: email ,
//         subject:"your otp for veification",
//         text :`your otp is : ${otp}`
//     };
//     transporter.sendMail(mailOptions,(error,info)=>{
//         if(error)
//         {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('otp sent successfully');
//     });

// });
// module.exports = transporter