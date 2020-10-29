const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  // checking whether the token we are getting from frontend is a valid token from firebase using firebase admin
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // adding user to request so that next middleware create user can be use user info which will create user in mongodb.
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      error: "Invalid or expired Token",
    });
  }
};
