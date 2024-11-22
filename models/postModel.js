const mongoose = require('mongoose');

const postSchema = mongoose.schema({
    title:{
        type: String,
        required: [true, 'title is required!'],
        trim : true,
    },
    description:{
        type : String,
        required : [true, 'title is required!'],
        trim: true,
    },
    userId:{
        type:mongoose.Schema.type.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema);