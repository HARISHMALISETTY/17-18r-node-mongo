const{userModel,postsModel}=require("./model.js")
exports.createUser = async (req, res) => {
  let insertedData = await userModel.create(req.body);
  if (insertedData) {
    res.send("data inserted ");
  } else {
    res.send("issue in inserting");
  }
};

exports.createPost = async (req, res) => {
  let data = await postsModel.create(req.body);
  console.log(data);
  if (data) {
    res.send("success");
  } else {
    res.send("error");
  }
};

exports.getPostByAuthor = async (req, res) => {
  console.log(req.params);
  let result = await postsModel.find({ author: req.params.author });
  if (result.length > 0) {
    res.status(200).send(result);
  } else {
    res.status(400).send("not able to get data");
  }
};
