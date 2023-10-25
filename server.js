const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

// imported app from app.js
const app = require("./app")

// connected with mongoose 
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log("database connected successfully".red.bold)
});

// decieded port 
const port = process.env.PORT || 8080;

// Have to do listen 
app.listen(port, () => {
    console.log(`server connet at port ${port}`.yellow.bold)
});