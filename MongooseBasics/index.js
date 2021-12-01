// const {TextDecoder, TextEncoder} = require("util");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
 .then(()=>{console.log("Connected!!!");}  
 )
 .catch((err)=>{
     console.log("Error",err);
 })