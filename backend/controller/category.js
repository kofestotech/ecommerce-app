const Category = require("../model/category");
const slugify = require("slugify");

exports.createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const newCategory = await Category.create({
      name: category,
      slug: slugify(category).toLowerCase(),
    });
    res.status(201).json({
      success: true,
      category: newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Unable to create new category.",
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 }).exec();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to get categories",
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    if (!category) {
      res.status(400).json({
        success: false,
        message: `No category found with name ${req.params.slug}`,
      });
    }
    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Please try again",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findOneAndDelete({
      slug: req.params.slug,
    });
    if (!deletedCategory) {
      res.status(400).json({
        success: false,
        message: `No category found with name ${req.params.slug}`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Please try again",
    });
  }
};

exports.updateCategory = async (req, res) => {
  const { name } = req.body;
  const { slug } = req.params;
  try {
    const category = await Category.findOneAndUpdate(
      { slug: slug },
      { name, slug: slugify(name) },
      { new: true, runvalidators: true }
    );
    if (!category) {
      res.status(400).json({
        success: false,
        message: `No category found with name ${req.params.slug}`,
      });
    }
    res.status(200).json({
      success: true,
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Please try again",
    });
  }
};
