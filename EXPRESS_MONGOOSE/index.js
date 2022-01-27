// IIFE - Style :)  
((express, app, path, dotenv, mongoose, Product) => {
   
    mongoose.connect(`mongodb://localhost:27017/vendor`)
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get(`/products`,async (req, res) => {
        const products = await Product.find({});
        res.render('products/index', {products: products});
    })
    
    app.listen( process.env.PORT, ()=>{
        console.log('Listening on port:',process.env.PORT);
    })

})
(
    require(`express`),
    require(`express`)(),
    require(`path`),
    require(`dotenv`).config(),
    require(`mongoose`),
    require(`./models/product`)
)