const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const model = require('./models/user');
const bcrypt = require('bcrypt')
const session = require('express-session');

mongoose.connect("mongodb://localhost:27017/BasicAuth")
.then(() => console.log('MongoDB connected'))
.catch(() => console.log('Error connecting to MongoDB'))

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "secret", resave: false, saveUninitialized: false 
}))

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
    req.session.user_id = user._id
    res.redirect("/access");
})

app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = await model.findOne({ username });
    if(await bcrypt.compare(password, user.password)){
        req.session.user_id = user._id;
        res.redirect("/access");
    }
    else res.redirect("/login")
})

app.post("/logout", (req, res) => {
    req.session.user_id = null;
    // or req.session.destroy()
    res.redirect("/login");
})

app.get("/access", (req, res) => {
    if(!req.session.user_id) return res.redirect("/login")
        res.render("access")
})

app.listen(3000, () => console.log('listening on http://localhost:3000'))