const express = require('express');
const app = express();
const morgan =require("morgan");

app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))
app.use(morgan("common"))
app.use(morgan("dev"))

app.get("/",(req,res) => {
    res.send("Home");
});
app.get("/dog",(req,res) => {
    res.send("woof woof");
});
app.listen(3000,() => {console.log('listening on 3000')});