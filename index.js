const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
const { userModel, postsModel } = require("./model.js");
const controllers = require("./controllers.js");

const port = process.env.HTTP_PORT;
const { dbConnect } = require("./db.js");
dbConnect();

app.post("/users", controllers.createUser);

app.post("/posts", controllers.createPost);

app.get("/posts/:author", controllers.getPostByAuthor);

app.get("/", (req, res) => {
  res.send("helloworld");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
