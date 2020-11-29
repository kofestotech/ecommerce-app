const admin = require("../firebase");
const User = require("../model/user");

const ADMIN_USER = "admin";

exports.authCheck = async (req, res, next) => {
  // checking whether the token we are getting from frontend is a valid token from firebase using firebase admin
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // adding user to request so that next middleware create user can use user info which will create user in mongodb.
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired Token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email }).exec();
  if (adminUser.role !== ADMIN_USER) {
    res.status(403).json({
      success: false,
      message: "Admin resource. Access denied",
    });
  } else {
    next();
  }
};
