// Basic Reddit Demo:

const express = require('express');
const app = express();
const path = require('path');

const redditData = require('./data.json');
let port= process.argv[2];
 if(!port){port=3000;}

app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'assets')))

app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res)=>{
    const subreddits =redditData.subreddits;
    res.render("HomePage",{subreddits: subreddits});
})

app.get("/r/:subreddit", (req, res)=>{
    const{subreddit}= req.params;
    const data =redditData.subreddits[subreddit];
    res.render("subreddit",{...data});
})

app.get("*",(req,res) => {
    res.render('404')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})