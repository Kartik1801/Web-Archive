// One to many mapping
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => console.log("MongoBB Connected!!!"))
    .catch(() => console.log("Mongo Connections Error"))

const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', "Winter"]
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products:[{type: Schema.Types.ObjectId, ref: "Product"}]
})

const Product = new mongoose.model("Product",productSchema);
const Farm = new mongoose.model("Farm",farmSchema);

/* Product.insertMany([
    {
        name:"melon",
        price: 60,
        season: "Summer"
    },
    {
        name:"watermelon",
        price: 119,
        season: "Summer"
    },
    {
        name:"Grapes",
        price: 70,
        season: "Winter"
    }
]); */

/* const makeFarm = async () => {
    const farm = new Farm({name:"Full Belly Farm", city: "Guinde, CA"})
    const melon = await Product.findOne({name: "Grapes"});
    farm.products.push(melon)
    await farm.save()
}
makeFarm()
 */
/* const addProduct = async () => {
    const farm =  await Farm.findOne({name:"Full Belly Farm"})
    const melon = await Product.findOne({name: "m   elon"});
    farm.products.push(melon)
    await farm.save()
}
addProduct()
 */
Farm.findOne({name: "Full Belly Farm"})
.populate('products')
.then(farm => console.log(farm))