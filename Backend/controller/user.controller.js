import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';

// Signup function
export const signup = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    const user = await User.findOne({ Email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(Password, 10);
    const createdUser = new User({
      FullName,
      Email,
      Password: hashPassword,
    });

    await createdUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcryptjs.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user.id,
        FullName: user.FullName,
        Email: user.Email,
        role: user.role, // Include role
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
