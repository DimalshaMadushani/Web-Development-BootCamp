const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));
// this is a middleware that adds a flash function to the request object
app.use(flash());

const Farm = require('./models/farm')


//connect to databse
mongoose.connect('mongodb://127.0.0.1:27017/FlashDemo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log("Mongo Database connected !!")
    })
    .catch(err => {
        console.log("Mongo Database connection error !!!")
        console.log(err)
    })



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// FARM ROUTES

// by this every view will have access to the flash messages 
//rather than passing it to every single route when rendering the view
app.use((req, res, next) => {
    // this res.locals is an object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any).
    res.locals.messages = req.flash('success');
    next();
})

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    // this message will be show when you add a new farm and redirect to the farms page
    console.log("flash " + req.flash('success'))
    // res.render('farms/index', { farms, messages: req.flash('succcess') })
    res.render('farms/index', { farms })
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    //this req
    req.flash('success', 'Successfully made a new farm!');
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})



