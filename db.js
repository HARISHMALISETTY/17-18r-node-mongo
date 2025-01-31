const mongoose = require("mongoose");
let x=require("dotenv").config();
console.log(x)

function dbConnect() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.0kq9c.mongodb.net/${process.env.DB_NAME}`
    )
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      "error occured", err;
    });
}

module.exports = { dbConnect };
