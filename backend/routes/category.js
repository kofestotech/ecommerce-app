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

router.route("/categories").get(getAllCategories);

router
  .route("/categories/:slug")
  .get(getCategory)
  .delete(authCheck, adminCheck, deleteCategory)
  .post(authCheck, adminCheck, createCategory)
  .put(authCheck, adminCheck, updateCategory);

module.exports = router;
