const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const productModel = require('./models/product_model')

mongoose.connect('mongodb://localhost:27017/vendor')
 .then(()=>{console.log("MONGO CONNECTION: SUCCESSFUL!");}  
 )
 .catch((err)=>{
     console.log("MONGO CONNECTION: ERROR!",err);
 })

require('dotenv').config();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.listen(process.env.PORT, ()=>{
    console.log('listening on port: ',process.env.PORT);
})