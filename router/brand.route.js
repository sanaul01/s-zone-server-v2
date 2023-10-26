const brandControllers = require("../Controllers/brand.controller");

const express = require("express");
const router = express.Router();

router.route('/').get(brandControllers.getBrand).post(brandControllers.postBrand)

module.exports = router;


