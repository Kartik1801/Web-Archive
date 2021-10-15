const express = require("express");
const app = express();
let port = process.argv[2]; 
if(!port){
    port=3000
}
// app.use is used to run some function on every single route/ request.
// express.json(), express.urlencoded() are middleware used to parse the request body that is coming along with the post request.
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/tacos',(req,res)=>{
    console.log(req.query);
    res.send("GET /Tacos Response !");
})
app.post('/tacos',(req,res)=>{
    console.log(req.body);
    res.send("POST /Tacos Response !");
})
app.listen(port,()=>{
    console.log("Listening on port: " + port);
})