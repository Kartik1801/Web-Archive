const express = require("express");
const app = express();
let port = process.argv[2]; 
if(!port){
    port=3000
}

app.get('/tacos',(req,res)=>{
    res.send("GET /Tacos Response !");
})
app.post('/tacos',(req,res)=>{
    res.send("POST /Tacos Response !");
})

app.listen(port,()=>{
    console.log("Listening on port: " + port);
})