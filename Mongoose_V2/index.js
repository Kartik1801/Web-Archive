const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopDB')
 .then(()=>{console.log("Connected!!!");}  
 )
 .catch((err)=>{
     console.log("Error",err);
 })
const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    }
})
const Product = mongoose.model('Product', productSchema);
const bike = new Product({name: "Yamaha", price:75000});
const car  = new Product({name: "Tesla",price:15000000});
car.save()
.then((d)=>console.log("Done!"+d))
.catch((err)=>console.log(err.errors.price.properties.message))