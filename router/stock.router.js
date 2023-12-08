const express = require("express");
const router = express.Router();
const stockController = require('../Controllers/stock.controller')

router.route('/')
    .get(stockController.getStock)
    .post(stockController.postStock)


module.exports = router;