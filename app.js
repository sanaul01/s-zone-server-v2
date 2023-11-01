const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const productRouter = require("./router/product.route");
const brandRouter = require("./router/brand.route");
const categoryRouter = require("./router/categories.route");
const storeRouter = require("./router/store.route")

app.get("/", (req, res,) => {
    console.log("welcome to my server")
});

app.use('/server/v2/category', categoryRouter);
app.use('/server/v2/product', productRouter);
app.use('/server/v2/brand', brandRouter);
app.use('/server/v2/store', storeRouter);

module.exports = app;