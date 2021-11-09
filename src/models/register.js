const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    fullname: {
        type: String
       ,required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
        
    },
    password: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    }

})
const Register = new mongoose.model("Users", userschema);
module.exports= Register;