const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose
  .connect(
    "mongodb+srv://publicUser:publicPassword@cluster0.pfwtx.mongodb.net/ecommerce?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("DB CONNECTED");
  });

const port = 8000;

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
