// IIFE - Style :)  
((express, app, path, dotenv, mongoose, Product, methodOverride, Farm) => {   

    // MongoDB connection
    mongoose.connect(`mongodb://localhost:27017/DemoApp`)
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

    // Express middlewares
    app.use(express.urlencoded({extended:true}))
    app.use(methodOverride("_method"))
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
    // FARM ROUTES:
    // Farm Index:
    app.get(`/farms`,async (req, res) => {
        const farms = await Farm.find({});
        res.render('farms/index', {farms});
    })

    // Add a Farm:
     app.get("/farms/new", (req, res) =>{
        res.render("farms/new")
     })
     app.post("/farms", async (req, res) => {
        const farm = new Farm(req.body);
        await farm.save();
        res.redirect("farms")
     })

    // Show a farms:
    app.get("/farms/:id", async (req, res) =>{
        const farm = await Farm.findById(req.params.id);
        res.render("farms/show",{farm})
    })

    app.get("/farms/:farm_id/products",async (req, res) =>{
        const {farm_id} = req.params;
        const category = await Product.find({}).distinct("category");
        res.render("products/new",{categories: category.length?category:["fruit", "vegetable", "diary"],farm_id});
    })
    app.post("/farms/:farm_id/products", async (req, res) => {
        const {farm_id} = req.params;
        const farm = await Farm.findById(farm_id);
        const product = new Product(req.body);
        farm.product.push(product);
        product.farm = farm;
        await farm.save();
        await product.save();
        res.redirect(`/farms/${farm_id}`)
    })


    // PRODUCTS ROUTES 
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
    require(`./models/farm`)
)