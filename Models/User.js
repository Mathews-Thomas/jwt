const mongoose = require('mongoose')
const UserSchema =mongoose.Schema(
    {
      username:  {
       type :String,
       required:[true,'username is required'],
       unique :true
        },
        password:{
            type: String,
            required:[true,'password is required'],
            unique :true
        }
    

    }
)
const adminSchema =mongoose.Schema(
    {
      username:  {
       type :String,
       required:[true,'username is required'],
       unique :true
        },
        password:{
            type: String,
            required:[true,'password is required'],
            unique :true
        }
    }
)
module.exports = mongoose.model('User',UserSchema)
module.exports = mongoose.model('Admin',adminSchema)