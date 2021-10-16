const express = require("express");
const app = express();
let port = process.argv[2]; 
const path=require('path');
if(!port){
    port=3000
}

const comments=[
    {
        username: "Todd",
        comment: "LOL"
    },
    {
        username: "Sammy",
        comment: "I am watching bird with ................"
    },
    {
        username: "JOJO",
        comment: "I dont understand whats going on"
    },
    {
        username: "Yuta",
        comment: "Konichiwa"
    }
]
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");


app.get('/comments',(req,res)=>{
    res.render('comments/index');    
})

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
/* 
RESTFUL ROUTES using comments example: 

    GET /comments - List/show all comments.                  - Index Route.
    POST /comments - Creates a new comment.                  - Create Route. 
    GET /comments/:id - Get one comment (using id)           - Show Route.
    PUT or PATCH /comments/:id - Updates one comment.        - Update Route.
    DELETE /comments/:id - Deletes one comment.              - Delete/Destroy Route.

*/