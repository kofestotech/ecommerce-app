const express = require("express");
const app = express();
const router = express.Router();

app.use((req, res, next) => {
  req.test = "test";
  next();
});

router.get("/users", (req, res) => {
  res.json({
    name: "user",
    test: req.test,
    time: req.reqTime,
  });
});

module.exports = router;
