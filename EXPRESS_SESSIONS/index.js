const session = require('express-session')
const express = require('express');
const app = express();

app.use(session({ secret: 'secret' }))

app.get('/viewcount', (req, res) => {
    if (req.session.count) req.session.count += 1;
    else req.session.count = 1;
    res.send(`YOU HAVE VIEWED THIS PAGE ${req.session.count} TIMES`)
})

app.listen(3000, () => {
    console.log("Listening on port: 3000");
})