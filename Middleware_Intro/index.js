const express = require('express');
const app = express();
const morgan =require("morgan");

app.use(morgan("dev"))
app.use(async (req, res, next) => {
    console.log("Hijacking")
    return next();
    console.log("Hijacked")
})

app.get("/",(req,res) => {
    console.log("home");
    res.send("Home");
});
app.get("/dog",(req,res) => {
    console.log("Woofy");
    res.send("woof woof");
});
app.listen(3000,() => {console.log('listening on 3000')});