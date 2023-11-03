const express = require("express");
const router =express.Router();

const categoryController = require("../Controllers/categories.controller")

router.route('/')
.get(categoryController.getCategory)
.post(categoryController.postCategory)

module.exports = router;