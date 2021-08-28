const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./db/conn");

// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("homee page");
});

app.listen(port, (req, res) => {
  console.log(`listen ${port}`);
});
