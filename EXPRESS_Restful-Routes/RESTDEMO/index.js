/* 
RESTFUL ROUTES using comments example: 

    GET /comments - List/show all comments.                  - Index Route.
    POST /comments - Creates a new comment.                  - Create Route. 
    GET /comments/:id - Get one comment (using id)           - Show Route.
    PUT or PATCH /comments/:id - Updates one comment.        - Update Route.
    DELETE /comments/:id - Deletes one comment.              - Delete/Destroy Route.

*/
const express = require("express");
const app = express();

const path=require('path');

const {v4:uid} =require('uuid');
const methodOverride=require('method-override');

let port = process.argv[2]; 
if(!port){
    port=3000;
}

let comments=[
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
        comment: "こんにちは"
    }
]

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.json());

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});    
});

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});
app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    const id = uid();
    comments.push({ id,username,comment});    
    res.redirect('/comments');
});

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const comment= comments.find(c=>c.id===id)
    res.render('comments/show',{comment});
});

app.get('/comments/:id/edit',(req,res)=>{
      const {id}=req.params;
      const comment= comments.find(c=>c.id===id);
      res.render('comments/edit',{comment});
});
app.patch('/comments/:id',(req,res)=>{
      const {id}=req.params;
      const foundComment= comments.find(c=>c.id===id)
      const newComment=req.body.comment;
      console.log(newComment)
      console.log(req.body)
      foundComment.comment=newComment;
      res.redirect('/comments');
});
  
app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params;
    comments= comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

  app.listen(port,()=>{
    console.log("Listening on port: " + port);
});