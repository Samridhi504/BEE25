const express = require("express");
const app = express();

app.use(m1);
app.use(m2);
app.use(m3);
// app.use(m2);

// if we run middleware at application level (app.use() vla) then it will run for every request
// middleware run in an order in which it is called

app.get("/", (req, res) => {
    console.log("running");
    res.send("home");
});
// app.use(m2);
app.get("/about", (req, res) => {  // Fixed route URL here
    console.log("running about");
    res.send("about page");
});



function m1(req, res, next) {
    console.log("running middleware 1");
    next();
}

function m2(req, res, next) {
    console.log("running middleware 2");
    next();  // Add next() to allow the request to move to the next middleware or route handler
}

function m3(req,res,next){
    console.log("running middleware 3");
    next();
}
app.listen(3000, () => {
    console.log("server is started on port 3000");
});