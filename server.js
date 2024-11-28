const express = require('express')
const mongoose = require('mongoose')
var path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/nursesNearMe')

app.use(express.static((path.join(__dirname + '/public'))))

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('index.ejs')
})


app.listen(3000,()=>{
    console.log("Connected")
})