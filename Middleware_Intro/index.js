const express = require('express');
const app = express();
const morgan =require("morgan");

var requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

app.use(morgan("dev"))
app.use(requestTime)

app.get("/",(req,res) => {
    console.log("home");
    let response = `${req.requestTime}`
    res.send(response + "<br> Home");
});
app.get("/dog",(req,res) => {
    console.log("Woofy");
    let response = `${req.requestTime}`
    res.send(response + "<br> woof woof");
});
app.listen(3000,() => {console.log('listening on 3000')});