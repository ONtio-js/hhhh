const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: "user"
    },
    createdAt: Date
});

userSchema.index({role:1});
const userModel = mongoose.model('User',userSchema);
userModel.ensureIndexes().then((err) => {
    if(err){
        return err;
    }
    return true;
});

module.exports = userModel;