const express = require("express");
const app = express();
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");
const {
  getAllCategories,
  updateCategory,
  createCategory,
  deleteCategory,
  getCategory,
} = require("../controller/category");

router
  .route("/categories")
  .get(getAllCategories)
  .post(authCheck, adminCheck, createCategory);

router
  .route("/categories/:slug")
  .get(getCategory)
  .delete(authCheck, adminCheck, deleteCategory)
  .put(authCheck, adminCheck, updateCategory);

module.exports = router;
