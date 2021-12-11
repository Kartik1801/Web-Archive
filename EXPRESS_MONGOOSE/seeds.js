// File for populating our database:
    
const mongoose = require('mongoose');
const product = require('./models/product_model')

mongoose.connect('mongodb://localhost:27017/vendor')
 .then(()=>{console.log("MONGO CONNECTION: SUCCESSFUL!");}  
 )
 .catch((err)=>{
     console.log("MONGO CONNECTION: ERROR!",err);
 })

 const p = new product({ name: 'Grape Fruit', price: 1.99, category: 'fruits'});
 p.save()
 .then((p)=>{console.log(p)})
 .catch((e)=>{console.log(e)})