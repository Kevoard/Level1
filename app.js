const express = require("express");
const app = express();
const port = 3025;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});



mongoose
  .connect(
    "mongodb+srv://kevoardmined:wiiTm45xbloPk4PH@kevmind.oo8jy0t.mongodb.net/all-data?retryWrites=true&w=majority&appName=KevMind"
  )
  .then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
      });
  })
  .catch((err) => {
    console.log(err);
  });
