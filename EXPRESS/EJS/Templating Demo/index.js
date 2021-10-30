const express =require('express');
const app =express();
let port = process.argv[2];
if(!port){
    port=3000;
}
const path = require('path');
/* 
 EJS is automatically required by express behind the scenes.
 
 By default, When we use a view engine, express is going to assume that all our views/templates files
 exist inside a "/views" directory  (or) We can select a directory using views property of app.set()

 NOTE:  If we run this file in some different directory then it will generate an error as 
        by default when we use a view engine, express just append process.cwd() with views
        Instead we can use path module to set the directory of views folder ourself. 
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) =>{
    res.render('home');
}); 
   

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    console.log(subreddit);
    res.render('subreddit',{subreddit:subreddit})
})

app.get("/eo",(req,res)=>{
    const {num} = req.query
    res.render('evenodd',{number: num});
})

app.get("/diceroll",(req,res)=>{
    num = Math.floor(Math.random()*6+1);
    res.render('random',{diceroll: num});
})

app.get("/cats",(req,res)=>{
 const cats=[
             "Blue", "Roxy", 'Neko-chan', "Nyan Pasu"
            ]
 res.render('cats',{ cats : cats})
})

app.get('*',(req,res)=>{
    res.render("404")
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})