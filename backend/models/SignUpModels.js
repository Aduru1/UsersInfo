const mongoose = require('mongoose')

const SignUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    }, 
    address:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports =mongoose.model('users',SignUpTemplate)
