((mongoose) => {   
    mongoose.connect('mongodb://localhost:27017/')
     .then( () => console.log("Connected to mongo!!!"))
     .catch( err => console.log("Error",err))

     const productSchema = new Mongoose.Schema
})
(
    require('mongoose')
)