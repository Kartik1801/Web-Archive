// File to populate Product database.
((mongoose, Product) => {   
    mongoose.connect(`mongodb://localhost:27017/vendor`)
     .then(() => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))
/* 
     const product = new Product({ 
         name: 'Grapes',
         price: 80,
         category: 'fruit'

    }) 
    product.save().then(p => console.log(p))
    .catch(err => console.log("Error",err)) */
 /*    seedProducts = [
        { 
            name: 'Eggplant',
            price: 120,
            category: 'vegetable'
        },
        { 
            name: 'melon',
            price: 75,
            category: 'fruit'
        },
        { 
            name: 'Watermelon',
            price: 150,
            category: 'fruit'
        },
        { 
            name: 'Milk',
            price: 52,
            category: 'dairy'
        },
        { 
            name: 'Eggs',
            price: 60,
            category: 'dairy'
        }
    ]
    Product.insertMany(seedProducts)
    .then(res => console.log("Updated",res))
    .catch(err => console.log("Error",err))
 */
})
(
    require(`mongoose`),
    require(`./models/product`)
)