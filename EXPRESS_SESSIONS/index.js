const sessions = require('express-session')
const express = require('express');
const app = express();

app.use(session({ secret: 'secret' }))

app.get('/viewcount', (req, res) => {
    res.send("YOU HAVE VIEWED THIS PAFE X TIMES")
})

app.listen(3000, () => {
    console.log("Listening on port: 3000");
})