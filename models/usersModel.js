const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
    type: String,
    required: [true, 'Email is required!'],
    trim : true,
    unique: [true, 'Email must be unique!'],
    minLength: [5, "email must have 5 charcaters!"],
    lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'Password must be provided!'],
        trim: true,
        select: false,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    verificationCode:{
        type: String,
        select: false,
    },
    verificationCodeValidation:{
        type: String,
        select: false,
    },
    forgetPasswordCode:{
        type: String,
        select: false,
    },
    forgetPasswordCodeValidation:{
        type: Number,
        select: false, 
    },
    },{
        timestamps: true
    });
    
    module.exports = mongoose.model("User", userSchema)