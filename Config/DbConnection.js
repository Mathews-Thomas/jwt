const mongoose = require('mongoose')
const connectdb = async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('database connected')
    }
    catch(err) {
 console.log(err)
    }
}
module.exports= connectdb