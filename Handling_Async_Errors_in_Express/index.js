// IIFE - Style :)  
((express, app, path, dotenv, mongoose, Product, methodOverride, generateError) => {   
    // MongoDB connection
    mongoose.connect(`mongodb://localhost:27017/vendors2`)
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

    // Express middlewares
    app.use(express.urlencoded({extended:true}))
    app.use(methodOverride("_method"))
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
    // Routes: 
    // Show All Products
    app.get(`/products`,async (req, res) => {
        const { category } = req.query;
        const products =category?await Product.find({category}):await Product.find({});
        res.render('products/index', {products: products, category : category?category:"All"});
    })
    
    // Add a product
    app.get("/products/new", async (req, res) => {
        const category = await Product.find({}).distinct("category");
        res.render("products/new",{categories: category});
    })
    app.post('/products',async (req, res) => {
            const newProduct = Product(req.body);
            await newProduct.save();
            res.redirect('/products');
        })
    
    // Edit a product
    app.get('/products/:id/edit', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        const category = await Product.find({}).distinct("category");
        res.render("products/edit",{product, categories: category});
    })
    app.put('/products/:id', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
    })

    // Remove a product
    app.delete('/products/:id', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findByIdAndRemove(id);
        res.redirect(`/products`);
    })

    // Show Product Details
    app.get('/products/:id', async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render("products/details", {product});
    })

     // Custom Error Handler:
    app.use((err, req, res, next) => {
        const {status = 500} = err;
        const {message = "Something Went Wrong!!!"} = err;
        res.status(status).send(message);
    });

         
    app.listen(process.env.PORT, () => {
        console.log('Listening on port:', process.env.PORT);
    })
})
(
    require(`express`),
    require(`express`)(),
    require(`path`),
    require(`dotenv`).config(),
    require(`mongoose`),
    require(`./models/product`),
    require(`method-override`),
    require(`./generateError`)
)