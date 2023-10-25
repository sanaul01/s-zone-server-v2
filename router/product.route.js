const express = require('express');
const router = express.Router();
const productController = require("../Controllers/product.controller")

router.route('/')
.get(productController.getProduct)
.post(productController.postProduct)

module.exports = router;