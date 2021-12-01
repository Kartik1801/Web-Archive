// const {TextDecoder, TextEncoder} = require("util");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(()=>{console.log("Connected!!!");}  
)
.catch((err)=>{
    console.log("Error",err);
})
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});
const Movie = mongoose.model('Movie',movieSchema);
const VE = new Movie({title: "Violet Evergarden", year: 2021,rating: "U",score: 9});