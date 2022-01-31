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
    app.get('/',(req,res) => {
        res.send("Go to /products")
    }) 
    // Show All Products
    app.get(`/products`,async (req, res, next) => {
        try{
            const { category } = req.query;
            const products =category?await Product.find({category}):await Product.find({});
            if (!products) 
                throw next(new generateError(404,"No Product Found"));
            res.render('products/index', {products: products, category : category?category:"All"});
            }
            catch(e){
                next(e);
            }
    })
    // Add a product
    app.get("/products/new", async (req, res, next) => {
        const category = await Product.find({}).distinct("category");
        if (!category) 
            throw next(new generateError(404,"No Category Found"));
        res.render("products/new",{categories: category});
    })
    app.post('/products',async (req, res, next) => {
        try{
            const newProduct = Product(req.body);
            await newProduct.save();
            res.redirect('/products');}    
        catch(e) {
            next(e);
        }   
    })
    // Edit a product
    app.get('/products/:id/edit', async (req, res, next) => {
        try{
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) 
                throw next(new generateError(404,"No Product Found"));
            const category = await Product.find({}).distinct("category");
            if (!category) 
                throw next(new generateError(404,"No Category Found"));
            res.render("products/edit",{product, categories: category});
        }
        catch(e){
            next(e);
        }
    })
    app.put('/products/:id', async (req, res, next) => {
        try{
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true });
            if (!product) 
                throw next(new generateError(404,"No Product Found"));
            res.redirect(`/products/${product._id}`);
        }
        catch(e) { 
            next(e);
        }
    })
    // Remove a product
    app.delete('/products/:id', async (req, res, next) => {
        try{
            const { id } = req.params;
            const product = await Product.findByIdAndRemove(id);
            if (!product)
            throw next(new generateError(404,"No Product Found"));
            res.redirect(`/products`);
        }
        catch(e){ 
            next(e);
        }
        
    })
    // Show Product Details
    app.get('/products/:id', async (req, res, next) => {
        try{
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) 
                throw next(new generateError(404,"No Product Found"));
            res.render("products/details", {product});
        }
        catch(e){ 
            next(e);
        }
    })
     // Custom Error Handler:
    app.use((err, req, res, next) => {
        const {status = 500, message = "Something Went Wrong!!!"} = err;
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