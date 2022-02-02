// One to Bazilions mapping
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => console.log("MongoBB Connected!!!"))
    .catch(() => console.log("Mongo Connections Error"))

const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    username: String
})
const tweetSchema = new Schema({
    tweet: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId , ref: "User"}
})

const User = new mongoose.model('User', userSchema);
const Tweet = new mongoose.model('Tweet', tweetSchema);

const makeTweet = async () => {
    /* const user = new User({
        name: "Kartik",
        username: "KD01"
    }); */
    const user =  await User.findOne({username: "KD01"})
    const tweet1 = new Tweet({tweet: "I am leaving twitter T_T ", likes: 0});
    tweet1.user = user;
    tweet1.save();
}
makeTweet()