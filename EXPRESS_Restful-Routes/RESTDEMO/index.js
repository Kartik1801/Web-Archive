const express = require("express");
const app = express();
let port = process.argv[2]; 
const path=require('path');
const { ppid } = require("process");
if(!port){
    port=3000
}

const comments=[
    {
        id: 1,
        username: "Todd",
        comment: "LOL"
    },
    {
        id: 2,
        username: "Sammy",
        comment: "I am watching bird with ................"
    },
    {   
        id: 3,
        username: "JOJO",
        comment: "I dont understand whats going on"
    },
    {
        id: 4,
        username: "Yuta",
        comment: "Konichiwa"
    }
]

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");


app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});    
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const comment= comments.find(c=>c.id===parseInt(id))
    res.render('comments/show',{comment});
})

app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment});    
    console.log(req.body);
    res.redirect('/comments');
});


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