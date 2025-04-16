const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

const userRoutes =  require("./routes/user");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users",userRoutes);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
    res.render("addEvent")
})





mongoose
    .connect("mongodb://127.0.0.1:27017/EventManagementSystem")
    .then(()=>console.log("Connected!"))
    .catch((err)=>console.log(err));

app.listen(8888, ()=>{
    console.log("Server Started!!");
});   