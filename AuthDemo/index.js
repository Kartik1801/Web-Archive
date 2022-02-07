const express = require('express');
const app = express();
const model = require('./models/user');

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/access", (req, res) => {
    res.send("OK, You are allowed!")
})

app.listen(3000, () => console.log('listening on http://localhost:3000'))