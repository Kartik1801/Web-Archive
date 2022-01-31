((mongoose) => {   

    const productSchema = new mongoose.Schema({
         name: {
             type : String,
             required: [true, "Name Cannot Be Blank"]
         },
         price: {
             type: Number,
             required: true,
             min : 0
         }, 
         category: {
             type: String,
             lowercase: true,
             enum: [ 'fruit', 'vegetable', 'dairy']
         }
     });

     const Product = mongoose.model('Product', productSchema);
     module.exports = Product;
})
(
    require('mongoose')
)