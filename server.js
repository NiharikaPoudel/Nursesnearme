//imports
import userDetailsSchema from './public/schema/userDetails.json'
import userAccessSchema from './public/schema/userAccess.json'
import nurseLoginSchema from './public/schema/nurseLogin.json'
import nurseDetailsSchema from './public/schema/nurseDetails.json'
import userLoginSchema from './public/schema/userLogin.json'

const express = require('express')
const mongoose = require('mongoose')
var path = require('path');
const jwt = require('jsonwebtoken');
const app = express();

//mongo db connection
mongoose.connect('mongodb://localhost:27017/nursesNearMe')

//mongodb schematic

//userAccess
const userAccessSchema = new mongoose.Schema(userAccessSchema)
const userAccess = mongoose.model('userAccess',userAccessSchema)
//nurses
const nurseLoginSchema = new mongoose.Schema(nurseLoginSchema)
const nurseDetailsSchema = new mongoose.Schema(nurseDetailsSchema)

const nurseLogin = mongoose.model('nurseLogin',nurseLoginSchema)
const nurseDetails = mongoose.model('nurseDetails',nurseDetailsSchema)

//users
const userLoginSchema = new mongoose.Schema(userLoginSchema)
const userDetailsSchema = new mongoose.Schema(userDetailsSchema)

const userLogin = mongoose.model('userLogin',userLoginSchema)
const userDetails = mongoose.model('userDetails',userDetailsSchema)

module.exports = userAccess,nurseLogin,nurseDetails,userLogin,userDetails


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