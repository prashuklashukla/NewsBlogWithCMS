const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayout);
app.set('layout', 'layout');


// views engine
app.set("view engine", "ejs");

//database connection
mongoose.connect(process.env.MONGODB_URI)


app.get("/", (req, res) => {

});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runing on http://localhost:${port}`);
});
