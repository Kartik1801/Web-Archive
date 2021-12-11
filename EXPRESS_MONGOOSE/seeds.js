// File for populating our database:
    
const mongoose = require('mongoose');
const product = require('./models/product_model')

mongoose.connect('mongodb://localhost:27017/vendor')
 .then(()=>{console.log("MONGO CONNECTION: SUCCESSFUL!");}  
 )
 .catch((err)=>{
     console.log("MONGO CONNECTION: ERROR!",err);
 })
/* 
 const p = new product({ name: 'Grape Fruit', price: 1.99, category: 'fruits'});
 p.save()
 .then((p)=>{console.log(p)})
 .catch((e)=>{console.log(e)})  
product.insertMany([
    { name: 'Eggplant', price: 1.00, category: 'vegetables'},
    { name: 'Melon', price: 4.99, category: 'fruits'},
    { name: 'Celery', price: 1.49, category: 'vegetables'},
    { name: 'Chocolate Milk', price: 2.69, category: 'dairy'},
    { name: 'Mini Watermelon', price: 3.99, category: 'fruits'}
])
.then(r=>console.log(r))
.catch(e=>console.log(e)) 
*/