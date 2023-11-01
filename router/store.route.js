const express = require("express");
const router = express.Router();
const storeController = require("../Controllers/store.controller")

router.route('/')
    .get(storeController.getStoreController)
    .post(storeController.postStoreController)

module.exports = router;