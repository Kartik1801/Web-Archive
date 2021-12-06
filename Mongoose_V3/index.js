const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopDB')
 .then(()=>{console.log("Connected!!!");}  
 )
 .catch((err)=>{
     console.log("Error",err);
 })
const personSchema = new mongoose.Schema({
    first: String,
    last: String
});
// exists only in js side not in db side.
personSchema.virtual("fullName").get(function(){return `${this.first} ${this.last}`;});
const Person = mongoose.model('Person', personSchema);
const kd = new Person({
    first: "Kartik",
    last: "Dhawan"
});
// kd.fullName
// kd.save();

// MIDDLEWARE FUNCTIONS:
personSchema.pre("save",async function(next){
    console.log("ABOUT TO SAVE !");
})
personSchema.post("save",async function(next){
    console.log("DONE SAVING !");
})
