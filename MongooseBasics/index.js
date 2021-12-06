const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
 .then(()=>{console.log("Connected!!!");}  
 )
 .catch((err)=>{
     console.log("Error",err);
 })
const movieSchema = new mongoose.Schema({
    title: String,
    altname: String,
    year: Number,
    score: Number,
    rating: String,
});
const Movie = mongoose.model('Movie',movieSchema);
const VE = new Movie({ title: "Violet Evergarden", year: 2021, rating: "U", score: 9 });
// use VE.save() to send to database
/* 
Movie.insertMany([
    {title: "The Silent Voice", year: 2019, rating: "U", score: 8.5},
    {title: "Weathering with You", year: 2019, rating: "U", score: 9.0},
    {title: "I want to eat your pancreas", year: 2018, rating: "U", score: 9.2},
    {title: "Colorful", year: 2021, rating: "U", score: 10}
    {title: "Your Name", altname:"Kimi no Na Wa" , year: 2016, rating: "PG-13", score: 8.89},
    {title: "Demon Slayer The Movie: Mugen Train", altname:"Kimetsu no Yaiba Movie: Mugen Ressha-hen", year: 2020, rating: "R-17+", score: 8.70},
    {title: "Rascal Does Not Dream of a Dreaming Girl", altname:"Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai" , year: 2019, rating: "PG-13", score: 8.64},
    {title: "Josee, the Tiger and the Fish", altname:"Josee to Tora to Sakana-tachi", year: 2020, rating: "PG-13", score: 8.52},
    {title: "Violet Evergarden I: Eternity and the Auto Memory Doll", altname:"Violet Evergarden Gaiden: Eien to Jidou Shuki Ningyou", year: 2019, rating: "PG-13", score: 8.41}
]);
*/
/* 
Movie.find({}).then((x) =>{console.log(x)})
Movie.find({year:{$lt: 2021}}).then(data => data.forEach((d)=>console.log(d.title)))
*/
/* 
Movie.updateOne({title: "Violet Evergarden: The Movie"},{score: 8.98})
.then((result) => {console.log("Updated",result)});
Movie.updateMany({ title: {$in : ["The Silent Voice", "Weathering with You","I want to eat your pancreas","Colorful"]}},{rating: "PG-13"})
.then(res => console.log("Updated",res)) 
Movie.findOneAndUpdate({ title:"Colorful"}, {year: 2010, score: 7.79},{new:true})
.then((res=> console.log("Updated",res)))
Movie.findOneAndUpdate({ title:"The Silent Voice"}, {altname:"Koe no Katachi", year: 2016, score: 8.97},{new:true})
.then((res=> console.log("Updated",res)))
Movie.findOneAndUpdate({ title:"I want to eat your pancreas",}, { altname:"Kimi no Suizou wo Tabetai", year: 2018, score: 8.58},{new:true})
.then((res=> console.log("Updated",res)))
Movie.findOneAndUpdate({ title:"Weathering with You"}, { altname: "Tenki no Ko", year: 2019, score: 8.34},{new:true})
.then((res=> console.log("Updated",res)))
*/

/* 
DEPRECATED ~ Movie.remove({ title:"Colorful"}).then((r)=>console.log("",r)) 
~ USE ~
Movie.deleteMany()
Movie.deleteOne() 
*/
