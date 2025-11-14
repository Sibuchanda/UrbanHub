import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import User from '../../models/User.js'

// =========== Register ==========
export const registerUser = async (req, res) => {
  const { userName, email, password} = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists! Please try again",
      });

    const saltValue = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto.createHash("sha256").update(saltValue + password).digest("hex");

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      saltValue
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// ========== Login ============
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

   const hashedInputPassword = crypto.createHash("sha256").update(User.saltValue + password).digest("hex");
   
   if (hashedInputPassword !== User.password) {
    res.status(400).json({ message: "Invalid credentials" });
    return;
  }

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// ====== Logout ========
export const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};




