const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/user");
const Blog = require("./model/blogs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//1. adding user data into database
//2. save kro
//3. send kro

//every query is asynchronous in nature
app.post("/users", async (req, res) => {
  let { name, email, password } = req.body;
  let newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  // newUser.save(); // this is asynchronous -- we have to make it synchronous use await
  await newUser.save();
  res.send("user added");
});

app.post("/blogs", async (req, res) => {
  let { title, content, author } = req.body;
  let newBlog = new Blog({
    title: title,
    content: content,
    author: author,
  });

  // newUser.save(); // this is asynchronous -- we have to make it synchronous use await
  await newBlog.save();
  res.send("blog added");
});



//konsi command server se connect krati hai - mongoose.connect

// pehle app.listen chlega then mongoose.connect ka msg print hoga bcz mongoose.connect is asynchronous , uska wait nhi hota
mongoose
  .connect("mongodb://127.0.0.1:27017/g15mdb")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(7777, () => {
  console.log("server started");
});

//MONGOOSE
//mongoose is odm(object document mapper) -  vo apke database ko map kr skte ho server se (shayd)
//     Schema                                                      model
// . structure of the data
//                :)cannot use schema until u create a model of it(:

// hr model ke liye ek schema create kro in model folder
