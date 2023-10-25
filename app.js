
const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


const productRouter = require("./router/product.route");


app.get("/", (req, res,) => {
    console.log("welcome to my server")
});

app.use('/server/v2/product', productRouter)



module.exports = app;