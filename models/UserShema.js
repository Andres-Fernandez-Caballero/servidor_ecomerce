const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique: true},
    email: {type: String,required:true, unique:true},
    password: {type: String,required:true},
    role: {type: String,required:true, enum:["admin","user"],default:"user"} // enum: solo puede ser admin o user
})

const User = mongoose.model("User",userSchema);

module.exports = User;