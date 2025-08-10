const jwt = require("jsonwebtoken");
const AdminModel = require('../models/Admin');

const verifyToken = async (req, res, next) => {
  try {
    // 1. Get token from cookies
    const { token } = req.cookies;

    // 2. If token missing, block access
    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "Unauthorized access. No token found.",
      });
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "api_secret");

    // 4. Find admin by ID
    const adminData = await AdminModel.findById(decoded.id).select("-password");
    if (!adminData) {
      return res.status(401).json({
        status: "failed",
        message: "Admin not found or invalid token.",
      });
    }

    // 5. Attach admin data to request
    req.admin = adminData;

    // 6. Continue to route
    next();
    
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      status: "failed",
      message: "Invalid or expired token.",
    });
  }
};

module.exports = verifyToken;
