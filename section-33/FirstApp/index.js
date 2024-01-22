const express = require('express');
const app = express();
// console.dir(app)

//middleware function
//every time a request comes in to the server this function will run
// // step1
// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     // console.dir(req)
//     // res.send("Hello, we got your request! This is a response")
//     // res.send({color:'red'})
//     res.send('<h1>This is my webpage</h1>')
// })
// //express automatically cretes a js object from the incoming http req

// // step2

// basic routing
//root route
app.get('/',(req,res) => {
    res.send("This is the home page!!!........")
});

//express pattern matching, path params
// /r/anything
app.get('/r/:subreddit/:postID',(req,res) => {
    console.log(req.params)
    // Instead of destructuring, directly access the property
    //const subreddit = req.params.subreddit;
    //destruring the subreddit from the params
    const {subreddit,postID} = req.params;
    res.send(`<h1> Viewing the post ID : ${postID} on the  ${subreddit} subreddit</h1>`)
})


app.get('/cats',(req,res) => {
    console.log("CAT REQUEST!")
    res.send('MEOW!')

})

app.post('/cats',(req,res) => {
    res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT THAN A GET REQUEST')
})

app.get('/dogs',(req,res) => {
    res.send('WOOF!')
})

//generic route, for any other route
// app.get('*',(req,res) => {
//     res.send(`I don't know that path!`)
// })

//query string
app.get('/search',(req,res) => {
    // console.log(req.query)
    // res.send('Hello')
    const {q} = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

//start the server
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})