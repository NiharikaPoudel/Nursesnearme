//imports
const express = require('express')
const mongoose = require('mongoose')
var path = require('path');
const jwt = require('jsonwebtoken');
const app = express();

//mongo db connection
mongoose.connect('mongodb://localhost:27017/nursesNearMe')

//server setup
app.use(express.static((path.join(__dirname + '/public'))))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'ejs');

//routes
app.get('/', (req,res) => {
    res.render('index.ejs')
})


app.listen(3000,()=>{
    console.log("Connected")
})