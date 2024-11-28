const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost:27017/nursesNearMe')

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index.ejs')
})


app.listen(3000,()=>{
    console.log("Connected")
})