const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const model = require('./models/user');
const bcrypt = require('bcrypt')

mongoose.connect("mongodb://localhost:27017/BasicAuth")
.then(() => console.log('MongoDB connected'))
.catch(() => console.log('Error connecting to MongoDB'))

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("HOMEPAGE")
})

app.get("/register", (req, res) => {
    res.render("register")
})
app.post("/register", async (req, res) => {
    const {username, password} = req.body
    const hash = await bcrypt.hash(password, 12);
    const user = new model({
        username: username,
        password: hash
    })
    await user.save()
    res.redirect("/");
})

app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = await model.findOne({ username });
    if(await bcrypt.compare(password, user.password)){
        res.redirect("/access");
    }
    else res.send("INVALID PASSWORD / USERNAME")
})

app.get("/access", (req, res) => {
    res.send("OK, You are allowed!")
})

app.listen(3000, () => console.log('listening on http://localhost:3000'))