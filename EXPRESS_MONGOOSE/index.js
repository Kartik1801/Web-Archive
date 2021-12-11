const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config()
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.listen(process.env.PORT, ()=>{
    console.log('listening on port: ',process.env.PORT);
})