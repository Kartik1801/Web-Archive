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
const VE = new Movie({ title: "Violet Evergarden", year: 2021, rating: "U", score: 9 });
// use VE.save() to send to database
/* 
Movie.insertMany([
    { title: "The Silent Voice", year: 2019, rating: "U", score: 8.5 },
    { title: "Weathering with You", year: 2019, rating: "U", score: 9.0 },
    { title: "I want to eat your pancreas", year: 2018, rating: "U", score: 9.2 },
    { title: "Colorful", year: 2021, rating: "U", score: 10 }
]);
 */
/* 
Movie.find({})
.then((x) =>{console.log(x)})
Movie.find({year:{$lt: 2021}}).then(data => data.forEach((d)=>console.log(d.title)))
 */
/* 
Movie.updateOne({title: "Violet Evergarden"},{title: "Violet Evergarden: The Movie", rating: "PG-13",year: 2020})
.then(() => {console.log("Updated")});
 */