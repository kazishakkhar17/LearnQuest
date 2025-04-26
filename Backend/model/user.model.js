import mongoose from "mongoose";

const userSchema=mongoose.Schema({
  FullName:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true,
    unique:true
  },
  Password:{
    type:String,
    required:true
  },
  role: {
    type: String,
    enum: ["user", "admin"],  // Only "user" or "admin" allowed
    default: "user"           // Default is "user"
  }

 
})

const User=mongoose.model("User",userSchema);
export default User;