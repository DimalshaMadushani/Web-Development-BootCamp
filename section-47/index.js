const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
//app.use(cookieParser()); tells the Express app to use the cookie-parser middleware. 
//This allows the application to parse cookies attached to the client's request. 
//Cookies are used to store information on the client's browser and can be sent back to the server with subsequent requests from the same client.
app.use(cookieParser('thisismysecret'));// to sign the cookie

// const  shelterRoutes = require('./routes/shelters');
// const dogRoutes = require('./routes/dogs');
// const adminRoutes = require('./routes/admin');


// // to use the routes we have to use the app.use() method
// app.use('/shelters', shelterRoutes);
// app.use('/dogs', dogRoutes);
// app.use('/admins', adminRoutes);




// step 2 code COOKIES
app.get('/greet', (req, res) => {
    const {name = "No-name"} = req.cookies;
    console.log(req.cookies)
    res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Dimalsha Madushani');
    res.cookie('animal', 'wild rabbit');
    res.send('sent you a cookie')
})

// step 3 code SIGNED COOKIES
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit','grape',{signed: true});
    res.send('signed your fruit cookie')
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("serving app on localhost:3000")
})