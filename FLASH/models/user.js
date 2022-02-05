// One to few mapping.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => console.log("MongoBB Connected!!!"))
    .catch(() => console.log("Mongo Connections Error"))

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses:[
        {   
            _id:{
                id: false
            },
            street: String,
            city: String,
            state: String,
            pinCode: String,
            country: String
        }
    ]
})

const User = new mongoose.model("User", userSchema);

const makeUser =async () => {
    const u = new User({
        first: "Michel",
        last: "Smith"
    })
    u.addresses.push({ 
        street: "Time  Square",
        city: "New York",
        state: "NY",
        country: "United States"
    })
    const res = await u.save();
    console.log(res);
}
makeUser()