const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();

// middlewares
app.use(morgan("dev"));

// used so that data sent from client in post request can reach the server. It will parse the incoming request
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// adding our own middleware before any routes. added a field in req object.
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

// routes middleware
// app.use("/api", authRoutes);

// using all routes files at once
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

module.exports = app;
