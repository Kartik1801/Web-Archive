// IIFE - Style :)  
((express, app, path, dotenv, mongoose) => {
    
    mongoose.connect('mongodb://localhost:27017/')
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get(`/dogs`,(req, res) => {
        res.send("WooF")       
    })
    
    app.listen( process.env.PORT, ()=>{
        console.log('Listening on port:',process.env.PORT);
    })

})
(
    require('express'),
    require('express')(),
    require('path'),
    require('dotenv').config(),
    require('mongoose')
)