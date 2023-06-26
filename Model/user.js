const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    address:{
        type:String,
        default:null
    },
    occupation:{
        type:String,
        default:null
    },
    relationship:{
        type:String,
        default:null
    },
    country:{
        type:String,
        default:null
    },
    postalCode:{
        type:Number,
        default:null
    },
    phone: {
        type:Number,
        default:null
    }
},{
    timestamps: true
});

const userModel = mongoose.model('user',userSchema);
module.exports.user =userModel