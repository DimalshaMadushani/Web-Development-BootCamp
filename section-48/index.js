const express = require('express');
const app = express();
const session = require('express-session')

const sessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false}
// to use the session we have to use the app.use() method
app.use(session(sessionOptions))

app.get('/viewcount',(req,res) => {
    //you can add any property to the session object using the req.session object
    if(req.session.count){
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`you have viewed this page ${req.session.count} times`)
});

app.get('/register', (req, res) => {
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const {username} = req.session;
    res.send(`Welcome back, ${username}`)
});


app.listen(3000, () => {
    console.log("serving app on localhost:3000")
})