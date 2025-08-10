const AdminModel = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

//setup cloudinary
cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});

class AdminController {

// GET /api/admin/dashboard (Protected)
  static async dashboard(req, res) {
    res.status(200).json({ message: 'Welcome to Admin Dashboard ✅' });
  }
  
  static AdminRegister = async (req, res) => {
    try {
      // console.log(req.body)
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          status: "failed",
          message: "All fields are required!",
        });
      }

      const isUser = await AdminModel.findOne({ email });
      if (isUser) {
        return res.status(400).json({
          status: "failed",
          message: "Email already exists",
        });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const userData = await AdminModel.create({
        name,
        email,
        password: hashPassword,
      });

      return res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: userData,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal Server Error",
      });
    }
  };

  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;

      //  Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          status: "failed",
          message: "Email and password are required.",
        });
      }

      //  Find admin by email
      const admin = await AdminModel.findOne({ email });
      if (!admin) {
        return res.status(401).json({
          status: "failed",
          message: "You are not a registered admin.",
        });
      }

      //  Compare passwords
      const isMatched = await bcrypt.compare(password, admin.password);
      if (!isMatched) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or password.",
        });
      }

      //  Generate JWT token
      const token = jwt.sign(
        { id: admin._id },
        process.env.JWT_SECRET || "api_secret", // Use env or fallback
        { expiresIn: "1d" }
      );

      //  Set token in cookies (optional)
      res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        // maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      
       // Respond with success
      return res.status(200).json({
        status: "success",
        message: "Admin login successful.",
        token,
        admin,
      });
    } catch (error) {
      console.error("Error during admin login:", error);

      return res.status(500).json({
        status: "failed",
        message: "Internal server error.",
      });
    }
  };

  static logOut = async (req, res) => {
    try {
      // Assuming the token is stored in a cookie, you don't need to log the token here
      res
        .status(201)
        .cookie("token", "", {
          httpOnly: true,
          expires: new Date(Date.now()), // Expire immediately
        })
        .json({
          success: true,
          message: "Logout Successfully",
        });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  };

   static getAdmin = async (req, res) => {
        try {
          const { id } = req.UserData;
          // console.log(req.UserData)
          const data = await AdminModel.findById(id);
          return res
            .status(200)
            .json({ status: "success", message: "user details found", data });
        } catch (error) {
          console.error(error);
          return res
            .status(500)
            .json({ status: "failed", message: "Internal server error." });
        }
      };

  static updateProfile = async (req, res) => {
    try {
      const { id } = req.UserData;
      const { name, email, image } = req.body;
      if (req.files) {
        const admin = await AdminModel.findById(id);
        const ImageID = admin.image.public_id;

        //deleting previous image
        await cloudinary.uploader.destroy(ImageID);

        //new image up..
        const imagefile = req.files.image;
        const imageupload = await cloudinary.uploader.upload(
          imagefile.tempFilePath,
          {
            folder: "Pninfosys/Admins",
          }
        );
        var data = {
          name: name,
          email: email,
          image: {
            public_id: imageupload.public_id,
            url: imageupload.secure_url,
          },
        };
      } else {
        var data = {
          name: name,
          email: email,
        };
      }
      await AdminModel.findByIdAndUpdate(id, data);
      return res.status(201).json({
        status: "success",
        message: "Profile Updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  };

  static changePassword = async (req, res) => {
  try {
    const { id } = req.admin; // Comes from verifyToken middleware
    const { np, cp } = req.body; // np = new password, cp = confirm password

    // Validate fields
    if (!np || !cp) {
      return res.status(400).json({
        status: "failed",
        message: "New password and confirm password are required.",
      });
    }

    if (np !== cp) {
      return res.status(400).json({
        status: "failed",
        message: "New password and confirm password do not match.",
      });
    }

    const hashedPassword = await bcrypt.hash(np, 10);

    await AdminModel.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    return res.status(200).json({
      status: "success",
      message: "Password changed successfully.",
    });

  } catch (error) {
    console.error("Password Change Error:", error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error.",
    });
  }
};


}

module.exports = AdminController;
