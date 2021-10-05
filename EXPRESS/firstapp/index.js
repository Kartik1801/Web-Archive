// Getting Started with Express
const exp = require('express');
const app=exp();
const port=process.argv[2]
if(port)
{
    /* // Every time a request is made use function is executed    
            app.use((req,res)=>{
                console.log('We got your request');
                //  res.send({'Hello, We got your request'});  
                //  res.send({'color': 'green', 'name':'Xmen'});  
                res.send('<h1>Hello, We got your request</h1>');   
            })
 */

    app.get("/r/:subreddit",(req,res) =>{
        const {subreddit}=req.params;
        console.log(`Browsing ${subreddit} Subreddit`);
        res.send(`<h1>Browsing ${subreddit} Subreddit</h1>`);
    })

    app.get("/r/:subreddit/:postID",(req,res) =>{
        const {subreddit,postID}=req.params;
        console.log(req.params)
        console.log(`Viewing ${postID} of ${subreddit} Subreddit`);
        res.send(`<h1>Viewing ${postID} of ${subreddit} Subreddit</h1>`);
    })

    app.get("/",(req,res) =>{
        console.log("Requested for /");
        res.send("<h1>WELCOME TO THE HOME PAGE</h1>");
    })

    app.get("/cat",(req,res) =>{
        console.log("Requested for /cat");
        res.send("<h1>MEOW !!!!</h1>");
    })
    
    app.get("/dog",(req,res) =>{
        console.log("Requested for /dog");
        res.send("<h1>WOOF !!!!</h1>")
    })

    app.get("/search",(req,res) =>{
        const {query} = req.query;
        if(!query){
            res.send("<h1>NOTHING FOUND IF NOTHING IS SEARCHED !</h1>");
        }
        res.send(`<h1>Search result for: ${query}</h1>`);
    })

    app.get("*",(req,res) =>{
        console.log("Unknown request")
        res.send("<h1>わからない</h1>")
    })

    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}
else
    console.log('Enter a port no!');