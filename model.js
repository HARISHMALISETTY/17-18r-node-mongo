const mongoose=require("mongoose");

const postsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: String,
  });
  
  const postsModel = mongoose.model("posts", postsSchema);
  
  const userSchema = new mongoose.Schema({
    user_name: String,
    age: Number,
    email: String,
  });
  
  const userModel = mongoose.model("new_users", userSchema);
  
  module.exports={userModel,postsModel}