const express = require('express');
const app = express();

app.use((req,res,next)=>{
    req.requestTime = (new Date(Date.now())).toGMTString();
    console.log(req.method, req.path);
    next();
});

app.use("/dogs",(req,res,next)=>{
    console.log("I Dont prefer DOGS!!");
    next();
})

const verifyPassword = (req,res,next) => {
    const {password} = req.query;
    if(password === "MyApp"){
        next();
    }
    res.send("Password needed");
}

app.get("/",(req, res, next) => {
    console.log(`Request Date : ${req.requestTime}`);
    res.send(`Request Date : ${req.requestTime}`)
})

app.get("/dogs",(req, res)=>{
    console.log(`Request Date : ${req.requestTime}`);
    res.send(`Woof`)
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("My Secret : 'I sometimes wear headphones in public so that I dont have to talk to anyone.' "); 
})

app.use((req,res)=>{
    res.status(404).send("Not Found")
})

app.listen(3000,()=>console.log("Listening on 3000"));