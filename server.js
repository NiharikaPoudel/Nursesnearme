require('dotenv').config()

//imports
const userLogin = require('./public/schema/userLogin.json')
const userAccess = require('./public/schema/userAccess.json')
const userDetails = require('./public/schema/userDetails.json')
const nurseLogin = require('./public/schema/nurseLogin.json')
const nurseDetails = require('./public/schema/nurseDetails.json')


const express = require('express')
const mongoose = require('mongoose')
var path = require('path');
const jwt = require('jsonwebtoken');
const app = express();

//mongo db connection
mongoose.connect('mongodb://localhost:27017/nursesNearMe')

//mongodb schematic
const userAccessSchema = new mongoose.Schema(userAccess)
const userLoginSchema = new mongoose.Schema(userLogin)
const userDetailsSchema = new mongoose.Schema(userDetails)
const nurseLoginSchema = new mongoose.Schema(nurseLogin)
const nurseDetailsSchema = new mongoose.Schema(nurseDetails)

const userAccessModel = mongoose.model('userAccess', userAccessSchema)
const userLoginModel = mongoose.model('userLogin', userLoginSchema)
const userDetailsModel = mongoose.model('userDetails', userDetailsSchema)
const nurseLoginModel = mongoose.model('nurseLogin', nurseLoginSchema)
const nurseDetailsModel = mongoose.model('nurseDetails', nurseDetailsSchema)

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

app.get('/login', (req,res) => {
    res.render('login.ejs')
})

app.post('/login', (req,res) => {
    const username = req.body.username
    const userPassword = req.body.userPassword

    const user = new userLogin({
        userId : username,
        userPassword : userPassword
    })
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json(accessToken)
})

app.get('/register', (req,res) => {
    res.render('register.ejs')
})

app.post('/register', (req,res) => {
    const username = req.body.username
    const userPassword = req.body.userPassword

    const user = new userLogin({
        userId : username,
        userPassword : userPassword
    })
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res

})


app.listen(3000,()=>{
    console.log("Connected")
})