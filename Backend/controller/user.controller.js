import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async (req,res)=>{
  try{
    const { FullName, Email, Password }= req.body;
    const user=await User.findOne({Email});
    if(user)
    {
      return res.status(400).json({message:"User already exists"})
    }
    const hashPassword = await bcryptjs.hash(Password,10);
    const createdUser=new User({
      FullName:FullName,
      Email:Email,
      Password:hashPassword
    })

    await createdUser.save()
    res.status(201).json({message:"User created successfully"})
  }
  catch(error)
  {
    console.log("Error: ",error.message);
  }
}

export const login=async(req,res)=>{
  try{
    const {Email,Password}=req.body;
    const user=await User.findOne({Email});
    const isMatch=await bcryptjs.compare(Password,user.Password);

    if(!user || !isMatch)
    {
      return res.status(400).json({message:"Invalid username or password"});
    }
    else
    {
      res.status(200).json({message:"Login Successful",user:{
        _id:user.id,
        FullName:user.FullName,
        Email:user.Email
      }})
    }
  }
  catch(err)
  {
    console.log(err.message);
    res.status(500).json({message:"Internal server error"})
  }
}