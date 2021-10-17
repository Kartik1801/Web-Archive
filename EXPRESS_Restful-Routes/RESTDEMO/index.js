const express = require("express");
const app = express();
let port = process.argv[2]; 
const path=require('path');
const {v4:uid} =require('uuid');
if(!port){
    port=3000
}
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});    
});
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});
app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const comment= comments.find(c=>c.id===id)
    res.render('comments/show',{comment});
});
app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    const id = uid();
    comments.push({ id,username,comment});    
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

const comments=[
    {
        id: uid(),
        username: "Todd",
        comment: "LOL"
    },
    {
        id: uid(),
        username: "Sammy",
        comment: "I am watching bird with ................"
    },
    {   
        id: uid(),
        username: "JOJO",
        comment: "I dont understand whats going on"
    },
    {
        id: uid(),
        username: "Yuta",
        comment: "Konichiwa"
    }
]

/* 
RESTFUL ROUTES using comments example: 

    GET /comments - List/show all comments.                  - Index Route.
    POST /comments - Creates a new comment.                  - Create Route. 
    GET /comments/:id - Get one comment (using id)           - Show Route.
    PUT or PATCH /comments/:id - Updates one comment.        - Update Route.
    DELETE /comments/:id - Deletes one comment.              - Delete/Destroy Route.

*/