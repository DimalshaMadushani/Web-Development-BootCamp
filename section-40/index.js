const express = require('express')
const app = express();
const morgan = require('morgan')

//using morgan-logger middleware
app.use(morgan('tiny'))

// represents the completion of the entire request-response cycle, 
//including the time taken for the server to process the request and send a response back to the client
app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method , req.path );
    next();
})


//password middleware demo
app.use((req,res,next) => {
    console.log(req.query)
    const {password} = req.query;
    if (password === 'catto'){
        console.log("catto right")
        next();
    }
    else {
        return res.send("Sorry you need a password")
    }
   
})

app.use('/dogs',(req,res,next) => {
    console.log("I love dogs ")
    next();
})


// app.get('/',(req,res) => {
//     console.log(`REQUEST DATE : ${req.requestTime}`)
//     res.send("Home Page")
// })

app.get('/dogs',(req,res) => {
    console.log(`REQUEST DATE : ${req.requestTime}`)
    res.send("woof woof")
})

app.get('/secret',(req,res) => {
    res.send("My secret is i love catsss")
})


app.use((req,res) => {
    res.status(404).send('NOT FOUND')
})







app.listen(3000,() => {
    console.log("App is running on localhost:3000")
})