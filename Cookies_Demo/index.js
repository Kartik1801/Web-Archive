const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser('Secret'))

app.get("/user", (req, res) => {
    console.log(req.cookies)
    res.send(`HOLA ${req.cookies.name}`)
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie("KEY", "value", { signed: true });
    res.send("Signed")
})

app.get('/verifysign', (req, res) => {
    console.log(req.cookies)
    res.send(req.signedCookies)
})

app.get('/setName',(req, res) =>{
    res.cookie('name', "KD");
    res.send("Sent you a cookie")
})

app.listen(3000, () => {
    console.log("Listening on port: 3000");
})