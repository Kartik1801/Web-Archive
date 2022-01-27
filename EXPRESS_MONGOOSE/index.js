// IIFE - Style :)  
((express, app, path, dotenv, mongoose, Product) => {   
    mongoose.connect(`mongodb://localhost:27017/vendor`)
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

    app.use(express.urlencoded({extended:true}))
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // Show All Products
    app.get(`/products`,async (req, res) => {
        const products = await Product.find({});
        res.render('products/index', {products: products});
    })

    // Show Product Details
    app.get('/products/:id', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render("products/details",{product});
    })

    // Add a product
    app.get('/products/new', (req, res) => {
        res.render('products/new')
    })
    app.post('/products',async (req, res) => {
        const newProduct = Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.redirect('/products');
    })

    app.get('/products/:id/edit', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render("products/edit",{product});
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