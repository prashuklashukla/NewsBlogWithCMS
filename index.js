const express = require("express");
const app = express();
require("dotenv").config();



app.get("/", (req, res) => {

});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runing on http://localhost:${port}`);
});
