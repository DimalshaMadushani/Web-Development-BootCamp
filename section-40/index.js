const express = require('express')
const app = express();
const morgan = require('morgan')
const AppError = require('./AppError')

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
const verifyPassword = (req,res,next) => {
    // console.log(req.query)
    const {password} = req.query;
    if (password === 'catto'){
        console.log("catto right")
        next();
    }
    else {
        res.status(401)
        throw new AppError('passsword required !!',401)
        // return res.send("Sorry you need a password")
    }
   
}

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
app.get('/error',(req,res) => {
    chicken.fly();
})
// pass the middleware functions as cal backs for only this route to protect tht route
app.get('/secret',verifyPassword,(req,res) => {
    res.send("My secret is i love catsss")
})

//demo for 403 status code
app.get('/admin',(req,res) => {
    throw new AppError('You are not an admin !',403)
})
app.use((req,res) => {
    res.status(404).send('NOT FOUND')
})

// //error handling middleware
// app.use((err,req,res,next) => {
//     console.log("***********error************")
//     // res.status(500).send("oh boy! we got an error")
//     next(err)
// })

//error handling middleware
app.use((err,req,res,next) => {
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message)
})

app.listen(3001,() => {
    console.log("App is running on localhost:3001")
})