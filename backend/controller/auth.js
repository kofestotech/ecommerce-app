const User = require("../model/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user; // user added in auth middleware. see auth.js file
  // because of new document in which updation happens will be returned
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name: email.split("@")[0], picture },
      { new: true }
    );
    if (user) {
      res
        .status(200)
        .json({ user, message: "User details updated successfully" });
    } else {
      const newUser = await User.create({
        email,
        picture,
        name: email.split("@")[0],
      });
      res.status(201).json({ newUser, message: "User created successfully" });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Please try again",
    });
  }
};

exports.currentUser = async (req, res) => {
  try {
    const currentUser = await User.findOne({ email: req.user.email });
    res.status(200).json(currentUser);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `No user found with ${req.user.email}`,
    });
  }
};
